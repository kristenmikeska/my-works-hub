"""Crushes (2026-10-23): the crush tracks (core.js "Crushes", data/crush*.js): Akihiko's and Shinjiro's, and the
multi-romance batch (Haechan's pull, Jungwon full, Jihoon and Minji lighter, Akihiko and Haechan's triangle).

  python3 tests/femc_crush.py [--screenshots /absolute/dir]

counts     moments per character and stretch, world lines, texts.
optin      the opt-in on/after 4/21: yes starts the track at 'noticed', no makes it 'out' (shared moments still play).
grow       noticed → crush → puppy → almost by rank, by warmth, by the fallback date; never backwards; dating on the route.
fade       his own friend route, another link's romance, letting it go, Shinjiro's 10/4: 'faded', and it stays settled.
triangle   both growing: the cr-tri-* moments fit; Shinjiro's romance settles Akihiko, Akihiko's settles Shinjiro.
old saves  a save at 4/20 with no crush field (slot and code): normalized, and the opt-in plays in the next days; a save
           past the window reads 'out', one on his romance route reads 'dating'; the field survives slots and codes.
year       a simulated year for a player who leans in, one who says no, and one in the triangle: no repeats, at least
           three days apart, never on a routine's day, the build-up moments reached in their months.
scenes     every moment down every choice path in every phase it can play in (finishes, every option reached, faces and
           cast names real), plus the story and link lines that branch on a crush.
world      phase lines replace the usual ones some days (vary, chatter, the evening menu line) and never for 'none'.
texts      crush-gated texts arrive only in their phase; a reply's warmth counts.
ui         the opt-in through the real UI at 4/21 from a 4/20 save, then the next school days.
searchers  Haechan's track starts by itself (9/1, after the first texts) and steps on his dates; it's a pull: dating
           Akihiko holds while it plays, his rank 8 settles it (romance: both dating; friend: faded); his romance
           settles any other growing track. Jungwon / Jihoon / Minji: opt-ins after their arrivals, offered only while
           she isn't with anyone (free), steps by rank or warmth (two for the lighter ones), faded by another romance.
           ifTaken. The triangle moments fit for every phase combination they're written for.
season     Sept to February for a player with no romance who leans into everyone, and one dating Akihiko from 9/1:
           no repeats, three days apart, Haechan's pull, the triangle and the searchers' tracks reached.
Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-crush-'))
OUT.mkdir(parents=True, exist_ok=True)
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def G_MD(md):
    m, d = map(int, md.split('/'))
    return (m - 4) % 12 * 31 + d


def G_DAY(md):
    m, d = map(int, md.split('/'))
    return d - 21 if m == 4 else 99

HELPERS = r"""
window.CR = (() => {
  const G = FemcGame, SC = FemcScene, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', true);
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const faces = new Set(), bad = [];
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => G.dayOf(e.date) < d && (!e.flag || e.flag !== 'year-goes-on' || d > G.dayOf('12/21'))).map(e => e.id);
    if (d > G.dayOf('4/18')) G.S.flags['joined-junpei'] = true;
    if (d > G.dayOf('8/7')) G.S.flags['joined-shinjiro'] = true;
    if (d > G.dayOf('12/21')) G.S.flags['year-goes-on'] = true;
    Object.values(G.LINKS).filter(l => l.forced && l.forced.includes(1)).forEach(l => { G.S.links[l.id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    Object.assign(G.S, copy(extra));
    return G.S;
  }
  const link = (id, rank, more = {}) => { if (!G.S.met.includes(id)) G.S.met.push(id); G.S.links[id] = { rank, xp: 0, seen: [], rankDay: {}, hung: 0, push: 0, reversed: false, ...more }; };
  const track = (id, phase, more = {}) => { G.S.crush.t[id] = { opt: ['none', 'out'].includes(phase) ? (phase === 'out' ? 'out' : null) : 'in', phase, warmth: 0, peak: Math.max(0, ['noticed', 'crush', 'puppy', 'almost', 'dating'].indexOf(phase) + 1), since: {}, ...more }; };
  function walk(a, fn) { (a || []).forEach(l => { fn(l); walk(l.then, fn); walk(l.else, fn); (l.choose || l.route || []).forEach(o => { fn(o, true); walk(o.then, fn); }); }); }
  function staticCheck(scene, key) {
    walk(scene, (l, opt) => {
      if (opt || !l.s) return;
      const have = FEMC_PORTRAITS[l.s];
      if (l.s === 'solar') { if (l.f && !(FEMC_PORTRAITS.solar || []).includes(l.f)) bad.push(`${key}: solar/${l.f}`); return; }
      if (have) { if (l.f && !have.includes(l.f)) bad.push(`${key}: ${l.s}/${l.f}`); }
      else if (!G.castHas(l.s)) bad.push(`${key}: no cast name for ${l.s}`);
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
      el.click();
    }
    el.remove(); document.documentElement.classList.remove('g-in-scene');
    return { result, decisions, picked };
  }
  // Every path of a scene, once per prepared state (a function that sets the save up).
  function paths(opts, key, states) {
    staticCheck(opts.scene, key);
    const want = new Set(); walk(opts.scene, (o, opt) => { if (opt) want.add(G.sub(o.t)); });
    const got = new Set(); let n = 0;
    for (const st of states) {
      const queue = [[]];
      while (queue.length) {
        const path = queue.shift(); st();
        const r = once(opts, path, key);
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
    const q = document.querySelector('#g-app [data-a]:not(:disabled)'); if (q && !document.querySelector('#g-app [data-next]:not([hidden])')) { q.click(); return 'quiz'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  return { at, link, track, walk, once, paths, step, faces, bad, base, copy };
})();
"""

try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1000, 'height': 486, 'deviceScaleFactor': 1, 'mobile': False})
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with the crush data and no browser errors')
    p.eval(HELPERS)

    # ── counts ──
    counts = p.eval(r"""(()=>{const G=FemcGame,M=G.D.crush.moments,d=md=>G.dayOf(md);
      const aki=M.filter(m=>m.who==='akihiko'&&m.id.startsWith('cr-aki-')),shin=M.filter(m=>m.who==='shinjiro'&&!m.id.startsWith('sp-'));  // the spice batch counts its own (femc_spice.py)
      const amb=(G.D.texts.ambient||[]).filter(t=>t.crush);
      return {akiSpring:aki.filter(m=>d(m.after)<d('9/1')).length, akiAfter:aki.filter(m=>d(m.after)>=d('9/1')).length,
        shin:shin.length, tri:M.filter(m=>m.id.startsWith('cr-tri-')).length,
        hc:M.filter(m=>m.id.startsWith('cr-hc-')).length,hcBefore:M.filter(m=>m.id.startsWith('cr-hc-')&&d(m.until)<d('11/4')).length,
        ah:M.filter(m=>m.id.startsWith('cr-ah-')).length,jw:M.filter(m=>m.id.startsWith('cr-jw-')).length,
        jh:M.filter(m=>m.id.startsWith('cr-jh-')).length,mj:M.filter(m=>m.id.startsWith('cr-mj-')).length,
        newTexts:Object.fromEntries(['haechan','jungwon','jihoon','minji'].map(k=>[k,amb.filter(t=>t.crush[k]).length])),
        newWorld:Object.fromEntries(['haechan','jungwon','jihoon','minji'].map(k=>[k,Object.values(G.D.crush.world).flat().filter(x=>x.crush&&x.crush[k]).length])),
        world:Object.values(G.D.crush.world).reduce((a,v)=>a+v.length,0), texts:amb.length,
        textsAki:amb.filter(t=>t.crush.akihiko&&Object.keys(t.crush).length===1).length, textsShin:amb.filter(t=>t.crush.shinjiro).length,
        byGate:Object.fromEntries(['noticed','crush','puppy','almost','dating','out','faded'].map(ph=>[ph,M.filter(m=>m.crush&&Object.values(m.crush).some(v=>[].concat(v).includes(ph))).length]))}})()""")
    print(json.dumps(counts))
    ok(25 <= counts['akiSpring'] <= 35, f"Akihiko: {counts['akiSpring']} moments April to August (25-35)")
    ok(10 <= counts['akiAfter'] <= 15, f"Akihiko: {counts['akiAfter']} lighter moments after the arrivals (10-15)")
    ok(12 <= counts['shin'] <= 18, f"Shinjiro (with the triangle): {counts['shin']} moments (12-18)")
    ok(counts['texts'] >= 20 and counts['textsShin'] >= 4, f"{counts['texts']} phase texts ({counts['textsShin']} with Shinjiro)")
    ok(12 <= counts['hc'] <= 18 and counts['hcBefore'] >= 3, f"Haechan: {counts['hc']} moments, {counts['hcBefore']} of them déjà vu before he arrives")
    ok(8 <= counts['ah'] <= 14, f"Akihiko and Haechan, the talks and the household: {counts['ah']} triangle moments")
    ok(9 <= counts['jw'] <= 15 and 4 <= counts['jh'] <= 7 and 4 <= counts['mj'] <= 7, f"Jungwon {counts['jw']} (full), Jihoon {counts['jh']} and Minji {counts['mj']} (lighter)")
    ok(all(v >= 3 for v in counts['newTexts'].values()) and all(v >= 4 for v in counts['newWorld'].values()), f"texts {counts['newTexts']} and world lines {counts['newWorld']} for each new track")

    # ── opt-in ──
    r = p.eval(r"""(()=>{const G=FemcGame,s=CR.at('4/21','afternoon');const due=G.crushDue();
      const a={due:due&&due.id, label:due&&due.label, link:due&&due.link, phase:G.crushTick('akihiko')};
      G.crushApply({akihiko:'in'});a.yes=G.crushTick('akihiko');
      CR.at('4/21','afternoon');G.crushApply({akihiko:'out'});a.no=G.crushTick('akihiko');
      a.noBuild=G.crushFits(G.D.crush.moments.find(m=>m.id==='cr-aki-ribs-ice'),'late',G.dayOf('4/22'));
      s.day=G.dayOf('4/24');a.noShared=G.crushFits(G.D.crush.moments.find(m=>m.id==='cr-aki-bread'),'lunch');
      CR.at('4/20','afternoon');a.before=G.crushDue();
      CR.at('4/21','lunch');a.lunchOnly=G.crushDue()?.id||null;
      return a})()""")
    ok(r['due'] == 'cr-aki-optin' and r['phase'] == 'none' and r['link'] == 'akihiko', f"the opt-in is due on 4/21 in PE for a save that hasn't been asked: {r}")
    ok(r['yes'] == 'noticed' and r['no'] == 'out', 'leaning in starts at noticed; not leaning in is out')
    ok(not r['noBuild'] and r['noShared'], "'out' gets the shared moments, not the build-up")
    ok(r['before'] is None, 'nothing before 4/21 (Kat is at 4/20)')

    # ── grow ──
    g = p.eval(r"""(()=>{const G=FemcGame,s=CR.at('4/25','early');G.crushApply({akihiko:'in'});const out={};
      s.day=G.dayOf('4/30');G.crushApply({akihiko:3});out.early=G.crushTick('akihiko');   // warmth but before 5/1
      s.day=G.dayOf('5/1');out.warm=G.crushTick('akihiko');
      CR.at('5/2','early');G.crushApply({akihiko:'in'});CR.link('akihiko',2);out.rank=G.crushTick('akihiko');
      CR.at('5/2','early');G.crushApply({akihiko:'in'});out.none=G.crushTick('akihiko');s.day=G.dayOf('5/24');out.by=G.crushTick('akihiko');
      CR.at('5/2','early');G.crushApply({akihiko:'in'});G.crushApply({akihiko:-1});G.S.day=G.dayOf('5/30');out.cold=G.crushTick('akihiko');
      CR.at('6/1','early');G.crushApply({akihiko:'in'});CR.link('akihiko',4);out.puppy=G.crushTick('akihiko');
      G.S.day=G.dayOf('7/11');CR.link('akihiko',5);out.almost=G.crushTick('akihiko');
      CR.link('akihiko',2);out.noBack=G.crushTick('akihiko');
      CR.link('akihiko',7,{route:'romance'});out.dating=G.crushTick('akihiko');out.peak=G.crushTrack('akihiko').peak;out.since=Object.keys(G.crushTrack('akihiko').since);
      out.crushed=G.branch({ifCrushed:{akihiko:'puppy'},then:[1],else:[]}).length===1;
      CR.at('6/1','early');CR.link('akihiko',9,{route:'romance'});out.outDating=(G.crushApply({akihiko:'out'}),G.crushTick('akihiko'));
      return out})()""")
    ok(g['early'] == 'noticed' and g['warm'] == 'crush', f"warmth grows it, but not before its date: {g}")
    ok(g['rank'] == 'crush' and g['none'] == 'noticed' and g['by'] == 'crush' and g['cold'] == 'noticed', 'rank grows it too; the fallback date does when she hasn\'t cooled; it doesn\'t when she has')
    ok(g['puppy'] == 'puppy' and g['almost'] == 'almost' and g['noBack'] == 'almost', 'puppy at rank 4 in June, almost at rank 5 after the tournament, never backwards')
    ok(g['dating'] == 'dating' and g['peak'] == 5 and g['crushed'], 'his romance route makes it dating; the peak remembers the build-up (ifCrushed)')
    ok(g['outDating'] == 'dating', 'a player who said no can still date him through his link')

    # ── fade ──
    f = p.eval(r"""(()=>{const G=FemcGame,o={};
      CR.at('6/5','early');CR.track('akihiko','puppy');CR.link('rio',8,{route:'romance'});o.other=G.crushTick('akihiko');CR.link('rio',8,{});o.stays=G.crushTick('akihiko');
      CR.at('6/5','early');CR.track('akihiko','crush');CR.link('akihiko',9,{route:'friend'});o.friend=G.crushTick('akihiko');
      CR.at('6/5','early');CR.track('akihiko','crush');G.crushApply({akihiko:'out'});o.letGo=G.crushTick('akihiko');
      CR.at('9/20','early');CR.track('shinjiro','almost');o.shinBefore=G.crushTick('shinjiro');G.S.day=G.dayOf('10/4');o.shinClosed=G.crushTick('shinjiro');
      CR.at('6/5','early');CR.track('akihiko','faded');o.fadedBuild=G.crushFits(G.D.crush.moments.find(m=>m.id==='cr-aki-desk-note'),'morning',G.dayOf('6/8'));
      CR.at('9/16','lunch');CR.track('akihiko','faded');const m=G.D.crush.moments.find(m=>m.id==='cr-aki-roof-seat');G.S.day=G.dayOf('9/16');
      o.fadedShared=G.dayInfo().type!=='school'||G.crushFits(m,'lunch');
      CR.at('11/20','early');CR.track('akihiko','dating');CR.link('akihiko',9,{route:'romance'});CR.link('haechan',9,{route:'romance'});o.datingStays=G.crushTick('akihiko');
      return o})()""")
    ok(f['other'] == 'faded' and f['stays'] == 'faded', f"another link's romance fades it into friendship, and it stays settled: {f}")
    ok(f['friend'] == 'faded' and f['letGo'] == 'faded', "his friend route, or letting it go, fades it")
    ok(f['shinBefore'] == 'almost' and f['shinClosed'] == 'faded', "Shinjiro's track closes on 10/4 unless it's dating")
    ok(not f['fadedBuild'] and f['fadedShared'], 'a friendship gets the shared moments, not the build-up')
    ok(f['datingStays'] == 'dating', 'dating him holds even when another romance comes later (the player chose both)')

    # ── triangle ──
    t = p.eval(r"""(()=>{const G=FemcGame,o={},M=id=>G.D.crush.moments.find(m=>m.id===id);
      CR.at('8/16','evening');CR.link('shinjiro',6);CR.track('akihiko','almost');CR.track('shinjiro','crush');
      o.tri=G.crushFits(M('cr-tri-sofa'),'evening');
      CR.track('shinjiro','faded');o.triGone=G.crushFits(M('cr-tri-sofa'),'evening');
      CR.at('8/31','evening');CR.track('akihiko','almost');CR.track('shinjiro','almost');CR.link('shinjiro',8,{route:'romance'});o.sRom=[G.crushTick('akihiko'),G.crushTick('shinjiro')];
      CR.at('9/2','evening');CR.track('akihiko','almost');CR.track('shinjiro','almost');CR.link('akihiko',7,{route:'romance'});o.aRom=[G.crushTick('akihiko'),G.crushTick('shinjiro')];
      CR.at('8/12','evening');CR.track('akihiko','crush');CR.track('shinjiro','noticed');G.crushApply({akihiko:2,shinjiro:1});
      o.warmth=[G.crushTrack('akihiko').warmth,G.crushTrack('shinjiro').warmth];
      // leaning Akihiko: from the same warmth on the same day, his track is further along
      CR.at('8/23','early');G.crushApply({akihiko:'in',shinjiro:'in'});G.crushApply({akihiko:4,shinjiro:4});o.lean=[G.crushTick('akihiko'),G.crushTick('shinjiro')];
      return o})()""")
    ok(t['tri'] and not t['triGone'], f"the triangle moments play while both grow, and stop when one settles: {t}")
    ok(t['sRom'] == ['faded', 'dating'] and t['aRom'] == ['dating', 'faded'], "choosing one's romance route settles the other")
    ok(t['lean'][0] in ('puppy', 'almost') and t['lean'][1] in ('noticed', 'crush', 'puppy') and ['noticed', 'crush', 'puppy', 'almost'].index(t['lean'][0]) > ['noticed', 'crush', 'puppy', 'almost'].index(t['lean'][1]), f"the triangle leans Akihiko: {t['lean']}")

    # ── searchers: Haechan's pull, the searchers' opt-ins, coexistence ──
    sr = p.eval(r"""(()=>{const G=FemcGame,o={},M=id=>G.D.crush.moments.find(m=>m.id===id);
      CR.at('8/30','evening');o.before=G.crushTick('haechan');
      CR.at('9/2','evening');o.auto=G.crushTick('haechan');o.autoOpt=G.crushTrack('haechan').opt;
      CR.at('9/2','evening');G.S.events=G.S.events.filter(e=>e!=='a4-first-text');o.noText=G.crushTick('haechan');
      o.steps=['11/10','11/11','11/25','12/8'].map(md=>{CR.at(md,'evening');return G.crushTick('haechan');});
      CR.at('11/20','evening');CR.link('akihiko',9,{route:'romance'});o.pull=[G.crushTick('akihiko'),G.crushTick('haechan')];
      o.pullFits=G.crushFits(M('cr-hc-landing'),'late',G.dayOf('11/20'))||G.crushFits(M('cr-hc-landing'),'late',G.dayOf('11/21'))||G.crushFits(M('cr-hc-landing'),'late',G.dayOf('11/22'));
      CR.at('12/20','evening');CR.link('akihiko',9,{route:'romance'});CR.link('haechan',8,{route:'romance'});o.both=[G.crushTick('akihiko'),G.crushTick('haechan')];
      CR.at('12/20','evening');CR.link('akihiko',9,{route:'romance'});CR.link('haechan',8,{route:'friend'});o.friend=[G.crushTick('akihiko'),G.crushTick('haechan')];
      CR.at('12/20','evening');CR.track('akihiko','almost');CR.track('jungwon','puppy');CR.link('haechan',8,{route:'romance'});o.hRom=[G.crushTick('akihiko'),G.crushTick('jungwon'),G.crushTick('haechan')];
      CR.at('11/10','evening');CR.track('jungwon','crush');CR.link('akihiko',9,{route:'romance'});o.jwFades=[G.crushTick('jungwon'),G.crushTick('haechan')];
      CR.at('11/10','evening');CR.link('rio',8,{route:'romance'});o.rioPull=G.crushTick('haechan');
      // ifTaken: someone other than the named link is on a romance route
      CR.at('11/20','evening');const T={ifTaken:'haechan',then:[1],else:[]};o.tNone=G.branch(T).length;CR.link('haechan',8,{route:'romance'});o.tSelf=G.branch(T).length;CR.link('akihiko',9,{route:'romance'});o.tAki=G.branch(T).length;
      // the opt-ins, after the arrivals, only while she isn't with anyone
      const fitOn=(id,from,to)=>{for(let d=G.dayOf(from);d<=G.dayOf(to);d++){const m=M(id);CR.at(G.mdOf(d),m.slot);if(G.crushFits(m,m.slot,d))return G.mdOf(d);}return null;};
      o.jwOpt=fitOn('cr-jw-optin','10/12','10/24');o.jhOpt=fitOn('cr-jh-optin','9/17','9/30');o.mjOpt=fitOn('cr-mj-optin','9/24','10/6');
      const takenFit=(id,md)=>{const m=M(id);CR.at(md,m.slot);CR.link('akihiko',9,{route:'romance'});return G.crushFits(m,m.slot,G.dayOf(md));};
      o.jwTaken=takenFit('cr-jw-optin',o.jwOpt);o.jhTaken=takenFit('cr-jh-optin',o.jhOpt);o.mjTaken=takenFit('cr-mj-optin',o.mjOpt);
      CR.at('10/20','after');G.crushApply({jungwon:'in'});o.jwIn=G.crushTick('jungwon');CR.at('10/20','after');G.crushApply({jungwon:'out'});o.jwOut=G.crushTick('jungwon');
      CR.at('12/6','after');o.jwLate=G.crushTick('jungwon');
      CR.at('10/25','after');G.crushApply({jungwon:'in'});CR.link('jungwon',2);o.jwCrush=G.crushTick('jungwon');
      G.S.day=G.dayOf('11/7');CR.link('jungwon',4);o.jwPuppy=G.crushTick('jungwon');G.S.day=G.dayOf('11/21');CR.link('jungwon',6);o.jwAlmost=G.crushTick('jungwon');
      CR.at('9/28','evening');G.crushApply({jihoon:'in'});CR.link('jihoon',2);o.jh=[G.crushTick('jihoon')];G.S.day=G.dayOf('10/19');CR.link('jihoon',5);o.jh.push(G.crushTick('jihoon'));G.S.day=G.dayOf('11/20');CR.link('jihoon',7);o.jh.push(G.crushTick('jihoon'));
      CR.at('10/4','evening');G.crushApply({minji:'in'});G.crushApply({minji:2});o.mj=[G.crushTick('minji')];G.S.day=G.dayOf('10/25');G.crushApply({minji:2});o.mj.push(G.crushTick('minji'));
      CR.at('11/22','evening');G.crushApply({jihoon:'in'});CR.link('jihoon',8,{route:'romance'});o.jhRom=[G.crushTick('jihoon'),G.crushTick('haechan')];
      // the triangle moments fit while she's with Akihiko and the pull plays, and after Haechan's rank 8 either way
      CR.at('11/10','evening');CR.link('akihiko',9,{route:'romance'});o.triAki=G.crushFits(M('cr-ah-pads'),'evening',G.dayOf('11/10'))||G.crushFits(M('cr-ah-pads'),'evening',G.dayOf('11/11'));
      CR.at('12/22','early');G.S.flags['year-goes-on']=true;CR.link('akihiko',9,{route:'romance'});CR.link('haechan',8,{route:'romance'});o.riverBoth=G.crushFits(M('cr-ah-river'),'early',G.dayOf('12/22'))||G.crushFits(M('cr-ah-river'),'early',G.dayOf('12/24'));
      CR.at('12/22','early');G.S.flags['year-goes-on']=true;CR.link('haechan',8,{route:'friend'});o.riverFriend=G.crushFits(M('cr-ah-river'),'early',G.dayOf('12/22'))||G.crushFits(M('cr-ah-river'),'early',G.dayOf('12/24'));
      return o})()""")
    print('searchers', json.dumps(sr))
    ok(sr['before'] == 'none' and sr['auto'] == 'noticed' and sr['autoOpt'] == 'in' and sr['noText'] == 'none', f"Haechan's pull starts by itself on 9/1 once the first texts have come, at noticed, with no opt-in: {sr}")
    ok(sr['steps'] == ['noticed', 'crush', 'puppy', 'almost'], f"it steps on his dates: {sr['steps']}")
    ok(sr['pull'] == ['dating', 'crush'] and sr['pullFits'] and sr['rioPull'] == 'noticed', 'dating Akihiko (or anyone) holds, and the pull keeps playing beside it')
    ok(sr['both'] == ['dating', 'dating'] and sr['friend'] == ['dating', 'faded'], "his rank 8 settles it: romance keeps both, friend fades his and Akihiko's holds")
    ok(sr['hRom'] == ['faded', 'faded', 'dating'] and sr['jwFades'] == ['faded', 'noticed'], "his romance settles any other growing track; another romance fades Jungwon's but never his")
    ok(sr['tNone'] == 0 and sr['tSelf'] == 0 and sr['tAki'] == 1, 'ifTaken: someone other than the named link')
    ok(all(sr[k] for k in ('jwOpt', 'jhOpt', 'mjOpt')) and not any(sr[k] for k in ('jwTaken', 'jhTaken', 'mjTaken')), f"the searchers' opt-ins come after their arrivals ({sr['jhOpt']}, {sr['mjOpt']}, {sr['jwOpt']}) and never while she's with someone")
    ok(sr['jwIn'] == 'noticed' and sr['jwOut'] == 'out' and sr['jwLate'] == 'out', "Jungwon: in, out, and a save past the window reads out")
    ok([sr['jwCrush'], sr['jwPuppy'], sr['jwAlmost']] == ['crush', 'puppy', 'almost'], 'Jungwon grows by his ranks')
    ok(sr['jh'] == ['crush', 'puppy', 'puppy'] and sr['mj'] == ['crush', 'puppy'], f"the lighter tracks have two steps (rank or warmth), never 'almost': {sr['jh']} {sr['mj']}")
    ok(sr['jhRom'] == ['dating', 'crush'], "Jihoon's romance makes his track dating; Haechan's pull stays")
    ok(sr['triAki'] and sr['riverBoth'] and sr['riverFriend'], 'the triangle moments fit while she dates Akihiko, and after his rank 8 either way')

    # ── old saves ──
    o = p.eval(r"""(()=>{const G=FemcGame,out={};
      const s=CR.at('4/20','late');CR.link('akihiko',1);delete s.crush;G.saveSlot(3);
      const raw=JSON.parse(localStorage.getItem('kg-femc-revamp-slot3'));out.noField=!('crush' in raw.state);
      G.loadSlot(3);out.norm=JSON.stringify(G.S.crush);
      const old=JSON.parse(JSON.stringify(G.S));delete old.crush;G.importCode(btoa(unescape(encodeURIComponent(JSON.stringify({state:old})))));out.code=Array.isArray(G.S.crush.seen)&&typeof G.S.crush.t==='object';
      // the next days: routines first, then the opt-in
      let got=null;const S=G.S;S.dailyLife={seen:[],lastDay:-99};
      for(let d=G.dayOf('4/21');d<=G.dayOf('4/30')&&!got;d++){S.day=d;S.spent={};for(const slot of G.slotsFor(G.dayInfo(d))){S.slot=slot;const r=G.dailyLife();if(r){G.finishDailyLife(r.id);continue;}const c=G.crushDue();if(c&&c.id==='cr-aki-optin'){got=G.mdOf(d)+' '+slot;break;}}}
      out.got=got;
      CR.at('9/15','early');delete G.S.crush;G.saveSlot(3);G.loadSlot(3);out.late=G.crushTick('akihiko');
      CR.at('11/15','early');CR.link('akihiko',9,{route:'romance'});delete G.S.crush;G.saveSlot(3);G.loadSlot(3);out.lateDating=G.crushTick('akihiko');
      CR.at('6/5','early');G.crushApply({akihiko:'in'});G.S.crush.seen.push('cr-aki-optin');G.saveSlot(3);G.S.crush={};G.loadSlot(3);out.keeps=G.S.crush.t.akihiko.opt==='in'&&G.S.crush.seen.includes('cr-aki-optin');
      localStorage.removeItem('kg-femc-revamp-slot3');return out})()""")
    ok(o['noField'] and '"t":{}' in o['norm'] and o['code'], f"a save with no crush field loads (slot and code) with an empty one: {o['norm']}")
    ok(o['got'] is not None, f"an old 4/20 save gets the opt-in in its next days ({o['got']})")
    ok(o['late'] == 'out' and o['lateDating'] == 'dating', 'a save past the window reads out; one on his romance route reads dating')
    ok(o['keeps'], 'the crush state survives save slots')

    # ── year ──
    YEAR = r"""((kind)=>{const G=FemcGame,s=CR.at('4/8','early');const plays=[],ids=[];
      const ranks=[['4/20',1],['4/30',2],['5/11',3],['6/13',4],['7/11',5],['8/10',6],['9/1',7],['10/10',8],['11/2',9],['12/1',10]];
      const sranks=[['5/12',1],['5/24',2],['6/10',3],['6/27',4],['7/12',5],['8/9',6],['8/20',7],['8/31',8],['9/19',9],['10/3',10]];
      for(let d=G.dayOf('4/8');d<=G.dayOf('1/31');d++){s.day=d;const info=G.dayInfo(d);s.spent={};s.tonight=(d%5===0)?'battled':null;
        if(d>=G.dayOf('4/18'))s.flags['joined-junpei']=true; if(d>=G.dayOf('12/22'))s.flags['year-goes-on']=true;
        ranks.forEach(([md,r])=>{if(d===G.dayOf(md)){CR.link('akihiko',r,{route:(kind!=='tri'&&r>=7)?'romance':(r>=9&&kind==='tri'?'romance':undefined)});if(kind==='tri'&&r<9)delete G.S.links.akihiko.route;}});
        if(kind==='tri')sranks.forEach(([md,r])=>{if(d===G.dayOf(md))CR.link('shinjiro',r)});
        if(kind==='out'){const l=G.S.links.akihiko;if(l)delete l.route;}
        for(const slot of G.slotsFor(info)){s.slot=slot;
          const due=G.D.events.filter(e=>!e.unlock&&e.date===info.md&&({darkhour:'evening'}[e.slot]||e.slot||'evening')===slot&&!s.events.includes(e.id)&&(!e.flag||s.flags[e.flag]));
          if(due.length){due.forEach(e=>s.events.push(e.id));continue;}
          // A link's late night takes the night first (ui.js), and plays (so the next nights are free again).
          if(slot==='late'){const ln=G.lateNightDue();if(ln){G.finishLateNight(ln.e.id);continue;}}
          const r=G.dailyLife();if(r){G.finishDailyLife(r.id);continue;}
          const c=G.crushDue();if(c){
            if(c.optIn)G.crushApply({[c.optIn]:kind==='out'?'out':'in'});else if(kind!=='out')G.crushApply(Object.fromEntries(Object.keys(c.crush||{}).map(k=>[k,1])));
            const ph=G.crushPhases();G.finishCrush(c.id);ids.push(c.id);plays.push([info.md,slot,c.id,d,ph.akihiko,ph.shinjiro,s.dailyLife.lastDay===d]);}
        }}
      // Three days apart in the spring and summer, two from 9/1 (the searchers' autumn).
      const S9=G.dayOf('9/1');let gap=99,gapAut=99,week={},weekAut={};for(let i=1;i<plays.length;i++){const g=plays[i][3]-plays[i-1][3];if(plays[i][3]<S9)gap=Math.min(gap,g);else gapAut=Math.min(gapAut,g);}
      plays.forEach(x=>{const w=Math.floor((x[3]+1)/7),W=x[3]<S9?week:weekAut;W[w]=(W[w]||0)+1;});
      const M=G.D.crush.moments,spring=M.filter(m=>m.who==='akihiko'&&G.dayOf(m.after)<G.dayOf('9/1')).map(m=>m.id);
      return {n:plays.length,unique:new Set(ids).size,gap,gapAut,maxWeek:Math.max(...Object.values(week)),maxWeekAut:Math.max(0,...Object.values(weekAut)),routineSameDay:plays.filter(x=>x[6]&&x[1]!=='late').length,
        springSeen:spring.filter(id=>ids.includes(id)).length,springMissed:spring.filter(id=>!ids.includes(id)),
        tri:ids.filter(i=>i.startsWith('cr-tri-')).length,shin:ids.filter(i=>i.startsWith('cr-shin-')).length,
        after:ids.filter(i=>i.startsWith('cr-aki-')&&G.dayOf(M.find(m=>m.id===i).after)>=G.dayOf('9/1')).length,
        phases:[...new Set(plays.map(x=>x[4]))],firstAki:plays.find(x=>x[2].startsWith('cr-aki'))?.[0],ends:[G.crushTick('akihiko'),G.crushTick('shinjiro')]}})"""
    lean = p.eval(YEAR + "('in')", timeout=300)
    print('lean', json.dumps(lean))
    ok(lean['n'] == lean['unique'] and lean['gap'] >= 3 and lean['gapAut'] >= 2 and lean['routineSameDay'] == 0, f"leaning in: {lean['n']} moments, none repeats, at least three days apart (two from September), never on a routine's day (a late night excepted)")
    ok(lean['maxWeek'] <= 3 and lean['maxWeekAut'] <= 4, f"at most three in any week, four in the autumn ({lean['maxWeek']}, {lean['maxWeekAut']})")
    ok(lean['springSeen'] >= 24, f"leaning in reaches {lean['springSeen']} of Akihiko's spring and summer moments (missed: {lean['springMissed']})")
    ok(set(lean['phases']) >= {'noticed', 'crush', 'puppy', 'almost', 'dating'} and lean['after'] >= 8, f"every phase is lived, then the lighter flow after the arrivals ({lean['after']}): {lean['phases']}")
    ok(G_DAY(lean['firstAki']) <= 4, f"the first moment comes within days of 4/21 ({lean['firstAki']})")
    no = p.eval(YEAR + "('out')", timeout=300)
    print('out', json.dumps(no))
    ok(no['phases'] == ['out'] and 4 <= no['springSeen'] <= 10 and no['after'] >= 8, f"saying no: only the shared moments ({no['springSeen']} in the spring, {no['after']} after), all as friends")
    tri = p.eval(YEAR + "('tri')", timeout=300)
    print('tri', json.dumps(tri))
    ok(tri['tri'] >= 3 and tri['shin'] >= 5, f"the triangle plays out ({tri['tri']} triangle moments, {tri['shin']} of Shinjiro's)")
    ok(tri['ends'] == ['dating', 'faded'], f"leaning Akihiko into his romance at rank 9 settles it: {tri['ends']}")

    # ── season: September to February with the searchers ──
    SEASON = r"""((kind)=>{const G=FemcGame,s=CR.at('9/1','early');const plays=[],ids=[];
      if(kind==='aki')CR.link('akihiko',7,{route:'romance'});
      const R={jungwon:[['10/15',1],['10/24',2],['10/29',3],['11/6',4],['11/13',5],['11/20',6],['12/1',7]],
        jihoon:[['9/20',1],['9/27',2],['10/7',3],['10/11',4],['10/18',5],['10/26',6],['11/7',7]],
        minji:[['9/27',1],['10/3',2],['10/10',3],['10/17',4],['10/24',5],['11/2',6],['11/12',7]]};
      for(let d=G.dayOf('9/1');d<=G.dayOf('2/28');d++){s.day=d;const info=G.dayInfo(d);s.spent={};s.tonight=(d%5===0)?'battled':null;
        if(d>=G.dayOf('12/22'))s.flags['year-goes-on']=true;
        for(const [id,list] of Object.entries(R))list.forEach(([md,r])=>{if(d===G.dayOf(md))CR.link(id,r);});
        if(d===G.dayOf('12/18'))G.S.links.haechan.route=kind==='free'?'romance':'friend';
        for(const slot of G.slotsFor(info)){s.slot=slot;
          const due=G.D.events.filter(e=>!e.unlock&&e.date===info.md&&({darkhour:'evening'}[e.slot]||e.slot||'evening')===slot&&!s.events.includes(e.id)&&(!e.flag||s.flags[e.flag]));
          if(due.length){due.forEach(e=>s.events.push(e.id));continue;}
          // A link's late night takes the night first (ui.js), and plays (so the next nights are free again).
          if(slot==='late'){const ln=G.lateNightDue();if(ln){G.finishLateNight(ln.e.id);continue;}}
          const r=G.dailyLife();if(r){G.finishDailyLife(r.id);continue;}
          const c=G.crushDue();if(c){if(c.optIn)G.crushApply({[c.optIn]:'in'});else G.crushApply(Object.fromEntries(Object.keys(c.crush||{}).map(k=>[k,1])));
            G.finishCrush(c.id);ids.push(c.id);plays.push([info.md,slot,c.id,d,s.dailyLife.lastDay===d]);}
        }}
      let gap=99;for(let i=1;i<plays.length;i++)gap=Math.min(gap,plays[i][3]-plays[i-1][3]);
      const n=pre=>ids.filter(i=>i.startsWith(pre)).length;
      return {n:plays.length,unique:new Set(ids).size,gap,routineSameDay:plays.filter(x=>x[4]&&x[1]!=='late').length,
        hc:n('cr-hc-'),ah:n('cr-ah-'),jw:n('cr-jw-'),jh:n('cr-jh-'),mj:n('cr-mj-'),aki:n('cr-aki-'),
        optins:ids.filter(i=>/optin/.test(i)),firstHc:plays.find(x=>x[2].startsWith('cr-hc-'))?.[0],
        ends:Object.fromEntries(['akihiko','haechan','jungwon','jihoon','minji'].map(k=>[k,G.crushTick(k)]))}})"""
    free = p.eval(SEASON + "('free')", timeout=300)
    print('season free', json.dumps(free))
    ok(free['n'] == free['unique'] and free['gap'] >= 2 and free['routineSameDay'] == 0, f"a free season: {free['n']} moments, none repeats, two days apart, never on a routine's day")
    ok(set(free['optins']) >= {'cr-jh-optin', 'cr-mj-optin', 'cr-jw-optin'}, f"every searcher's opt-in comes up for someone who isn't with anyone: {free['optins']}")
    ok(free['hc'] >= 9 and free['ah'] >= 6 and free['jw'] >= 6 and free['jh'] >= 3 and free['mj'] >= 3, f"Haechan {free['hc']}, the triangle {free['ah']}, Jungwon {free['jw']}, Jihoon {free['jh']}, Minji {free['mj']} reached")
    ok(free['ends']['haechan'] == 'dating' and all(free['ends'][k] == 'faded' for k in ('jungwon', 'jihoon', 'minji')), f"choosing Haechan at rank 8 settles the others: {free['ends']}")
    aki = p.eval(SEASON + "('aki')", timeout=300)
    print('season aki', json.dumps(aki))
    ok(aki['n'] == aki['unique'] and aki['gap'] >= 2 and aki['routineSameDay'] == 0, f"dating Akihiko from 9/1: {aki['n']} moments, none repeats, two days apart")
    ok(not any(i in aki['optins'] for i in ('cr-jh-optin', 'cr-mj-optin', 'cr-jw-optin')) and all(aki['ends'][k] == 'out' for k in ('jungwon', 'jihoon', 'minji')), f"while she's with Akihiko nobody asks her to lean toward someone new: {aki['optins']} {aki['ends']}")
    ok(aki['hc'] >= 9 and aki['ah'] >= 6 and aki['aki'] >= 6, f"and Haechan's pull still plays beside him ({aki['hc']}), with the triangle ({aki['ah']}) and his own ({aki['aki']})")
    ok(aki['ends']['akihiko'] == 'dating' and aki['ends']['haechan'] == 'faded' and aki['firstHc'] and G_MD(aki['firstHc']) < G_MD('11/4'), f"Haechan's friend route leaves Akihiko's holding: {aki['ends']}; the déjà vu starts before he arrives ({aki['firstHc']})")

    # ── scenes ──
    n_paths = p.eval(r"""(()=>{const G=FemcGame;let n=0;const ALL=['out','noticed','crush','puppy','almost','dating','faded'];
      G.D.crush.moments.forEach(m=>{
        const ids=Object.keys(m.crush||{[m.optIn]:1});
        const lists=ids.map(id=>m.optIn?['none']:[].concat(m.crush[id]));
        // What else the scene branches on (the multi-romance batch): someone else's romance (ifTaken / ifRomance), and
        // where the story is heading (ifHeading; no flag = R).
        let taken=false,heads=false;const roms=new Set();
        CR.walk(m.scene,l=>{if(l.ifTaken)taken=true;if(l.ifRomance)roms.add(l.ifRomance);if(l.ifHeading)heads=true;});
        const extras=[null,...(taken||roms.size?['akihiko','rio',...roms]:[])].filter((x,i,a)=>x!==m.who&&a.indexOf(x)===i);
        const H=heads?[null,'S','H','stay','true']:[null];
        const states=[];
        lists[0].forEach((ph,i)=>extras.forEach(ex=>(ex?[null]:H).forEach(h=>states.push(()=>{CR.at(m.after,m.slot);G.S.tonight=m.when==='tartarus'?'battled':null;
          ids.forEach((id,k)=>CR.track(id,lists[k][Math.min(i,lists[k].length-1)]));
          if(lists[0][i]==='dating')CR.link(m.who,9,{route:'romance'});
          CR.link('akihiko',Math.max(G.S.links.akihiko?.rank||0,i%2?4:1),G.S.links.akihiko?.route?{route:G.S.links.akihiko.route}:{});
          if(ex)CR.link(ex,9,{route:'romance'});
          if(h)G.S.flags['route-'+h]=true;}))));
        n+=CR.paths({scene:[{bg:m.bg},...m.scene],place:m.place,time:m.time,label:m.label||'x',link:m.who},'crush/'+m.id,states);
      });
      // story and link lines that branch on a crush: each with its gate on and off
      const evIds=['lw-pre-priestess','lw-pre-empress','lw-birthday','lw-birthday-late','lw-pre-hierophant','lw-pre-chariot','lw-pre-hermit','lw-pre-fortune','a3-full-house'];
      evIds.forEach(id=>{const e=G.D.events.find(x=>x.id===id);const st=['out','noticed','puppy','almost','dating'].map(ph=>()=>{CR.at(e.date,'evening');CR.track('akihiko',ph);CR.track('shinjiro',ph==='dating'?'dating':ph);CR.link('akihiko',4);CR.link('shinjiro',3);});
        n+=CR.paths({scene:e.scene,place:e.place,time:e.time,event:true},'event/'+id,st);});
      // the multi-romance batch: the 12/16 call with Jungwon's track at each phase, and the endings with Akihiko dating
      // and Haechan's pull (each ending, with and without).
      const call=G.D.events.find(x=>x.id==='a5-call-hoax');
      n+=CR.paths({scene:call.scene,place:call.place,time:call.time,event:true},'event/a5-call-hoax',['out','crush','almost','dating'].map(ph=>()=>{CR.at('12/16','evening');CR.track('jungwon',ph);if(ph==='dating')CR.link('jungwon',8,{route:'romance'});}));
      const end=G.D.events.find(x=>x.id==='end-ending');
      const endStates=[['route-R'],['route-S'],['route-stay','stay-akihiko'],['route-true','true-final']].flatMap(fl=>[false,true].map(aki=>()=>{CR.at('3/7','late');fl.forEach(f=>G.S.flags[f]=true);CR.track('haechan','almost');if(aki){CR.link('akihiko',15,{route:'romance'});}}));
      n+=CR.paths({scene:end.scene,place:end.place,time:end.time,event:true},'event/end-ending',endStates);
      // rank scenes that acknowledge the tracks (with the track on and off, and with someone else for Haechan's rank 8)
      const rank=(id,r,states)=>{const R=G.LINKS[id].ranks[r-1];n+=CR.paths({scene:R.scene,place:R.place,time:R.time,link:id},`rank/${id}${r}`,states);};
      rank('haechan',8,[null,'akihiko','rio'].map(ex=>()=>{CR.at('12/18','late');CR.link('haechan',7);if(ex)CR.link(ex,9,{route:'romance'});}));
      rank('akihiko',10,[['romance','out'],['romance','almost'],['friend','almost']].map(([rt,hp])=>()=>{CR.at('12/1','evening');CR.link('akihiko',9,{route:rt});CR.track('akihiko',rt==='romance'?'dating':'faded');CR.track('haechan',hp);}));
      [['jungwon',8,'12/9'],['jihoon',8,'11/21'],['minji',8,'11/26']].forEach(([id,r,md])=>rank(id,r,['out','puppy'].map(ph=>()=>{CR.at(md,'evening');CR.link(id,r-1);CR.track(id,ph);})));
      return n})()""", timeout=900)
    bad = p.eval('CR.bad')
    ok(not bad, f'every crush moment and crush-branched story line finishes, reaches every option, with real faces and names: {bad[:6]}')
    ok(n_paths > 300, f'{n_paths} scene paths played')
    lines = p.eval(r"""(()=>{const G=FemcGame,hit={};const want=["She'd been telling herself it was the wind","It hadn't been the first day for her","It wasn't news to her hand","*Dating.* The word stayed","Under the bench, out of sight","Your pulse rises by eleven",
        "Two floors up Akihiko was asleep","And one of them in particular, the one in the laundry room","Her hand had been ahead of her since a cup of tea","a bowl of ramen made exactly right","a silver sunshade in her hands",
        "*Your boyfriend.* The word went into her","It was real love, in this world","She would go on having loved him","In every world she had ever been, he found her","Here, in this one, for real"];
      const scan=(lines)=>{CR.walk(lines,l=>{const t=l.n||l.t||'';want.forEach(w=>{if(t.includes(w))hit[w]=(hit[w]||0)+1;});});};
      ['akihiko','shinjiro','haechan','jungwon','jihoon','minji'].forEach(id=>G.LINKS[id].ranks.forEach(r=>scan(r.scene)));G.D.events.forEach(e=>scan(e.scene));return want.filter(w=>!hit[w])})()""")
    ok(not lines, f'the link and story acknowledgments are in place: missing {lines}')

    # ── world ──
    w = p.eval(r"""(()=>{const G=FemcGame,out={none:0,hit:0,days:0,chatter:0,sub:0};
      for(let d=G.dayOf('5/12');d<G.dayOf('6/12');d++){CR.at(G.mdOf(d),'lunch');if(G.crushLine('lunch.clear'))out.none++;}
      for(let d=G.dayOf('5/12');d<G.dayOf('6/12');d++){CR.at(G.mdOf(d),'lunch');CR.track('akihiko','puppy');out.days++;const v=G.vary('lunch.clear',['plain']);if(G.D.crush.world['lunch.clear'].some(x=>x.t===v))out.hit++;
        if(G.crushLine('chatter.lunch'))out.chatter++;if(G.crushLine('evening.sub'))out.sub++;}
      CR.at('9/20','lunch');CR.track('akihiko','faded');let fr=0;for(let d=G.dayOf('9/20');d<G.dayOf('10/20');d++){G.S.day=d;const x=G.crushLine('lunch.clear');if(x&&/Junpei arguing about baseball/.test(x))fr++;}
      out.friend=fr;return out})()""")
    ok(w['none'] == 0, 'no world lines for a player who has not been asked')
    ok(0.25 * w['days'] <= w['hit'] <= 0.75 * w['days'] and w['chatter'] > 0 and w['sub'] > 0, f"phase lines replace the usual ones about half the days, in lunch, chatter and the evening menu: {w}")
    ok(w['friend'] > 0, 'a friendship gets its own lines')

    # ── texts ──
    tx = p.eval(r"""(()=>{const G=FemcGame,out={};const send=(md,ph,id)=>{const s=CR.at(md,'evening');if(ph)CR.track('akihiko',ph);
        s.phone.done=G.D.texts.texts.map(x=>x.id).concat(G.D.texts.ambient.filter(x=>x.id!==id).map(x=>x.id));s.phone.lastInvite=9999;s.runIns={seen:[],lastDay:-99,later:[]};G.deliverTexts();return s.phone.done.includes(id);};
      out.yes=send('5/12','noticed','cr-tx-aki-dinner');out.no=send('5/12','out','cr-tx-aki-dinner');out.none=send('5/12',null,'cr-tx-aki-dinner');
      send('5/12','noticed','cr-tx-aki-dinner');const w0=G.crushTrack('akihiko').warmth;G.replyText('akihiko',0);out.warm=G.crushTrack('akihiko').warmth-w0;
      return out})()""")
    ok(tx['yes'] and not tx['no'] and not tx['none'], f"a phase text arrives only in its phase: {tx}")
    ok(tx['warm'] == 1, "a reply's warmth counts")
    tx2 = p.eval(r"""(()=>{const G=FemcGame,out={};const send=(md,id,ph,flag,taken)=>{md=G.D.texts.ambient.find(x=>x.id===id).to;const s=CR.at(md,'evening');for(const [k,v] of Object.entries(ph))CR.track(k,v);if(flag)s.flags[flag]=true;if(taken)CR.link(taken,9,{route:'romance'});
        const t=G.D.texts.ambient.find(x=>x.id===id);s.slot=t.slot||'evening';s.phone.done=G.D.texts.texts.map(x=>x.id).concat(G.D.texts.ambient.filter(x=>x.id!==id).map(x=>x.id));s.phone.lastInvite=9999;s.runIns={seen:[],lastDay:-99,later:[]};G.deliverTexts();return s.phone.done.includes(id);};
      out.hc=send('11/8','cr-tx-hc-stair',{},'arrived-haechan');out.hcNoFlag=send('11/8','cr-tx-hc-stair',{},null);
      out.hcTaken=send('11/8','cr-tx-hc-stair',{},'arrived-haechan','akihiko');
      out.jw=send('10/20','cr-tx-jw-finished',{jungwon:'noticed'},'arrived-jungwon');out.jwOut=send('10/20','cr-tx-jw-finished',{jungwon:'out'},'arrived-jungwon');
      out.ah=send('11/20','cr-tx-ah-agasshi',{},'arrived-haechan','akihiko');out.ahFree=send('11/20','cr-tx-ah-agasshi',{},'arrived-haechan');
      return out})()""")
    ok(tx2['hc'] and not tx2['hcNoFlag'] and tx2['hcTaken'], f"Haechan's texts come once he's here, whoever she's with: {tx2}")
    ok(tx2['jw'] and not tx2['jwOut'], "Jungwon's come in his phase only")
    ok(tx2['ah'] and not tx2['ahFree'], "the dorm's triangle texts need Akihiko dating her")
    wl = p.eval(r"""(()=>{const G=FemcGame,o={hcBefore:0,hcAfterNoticed:0,jw:0};const W=G.D.crush.world;
      const hcNoticed=new Set(Object.values(W).flat().filter(x=>x.crush&&x.crush.haechan==='noticed'&&!x.crush.akihiko).map(x=>x.t));
      for(let d=G.dayOf('9/10');d<G.dayOf('10/30');d++){CR.at(G.mdOf(d),'late');const x=G.crushLine('late.plain');if(x&&hcNoticed.has(x))o.hcBefore++;}
      for(let d=G.dayOf('11/5');d<G.dayOf('11/10');d++){CR.at(G.mdOf(d),'late');const x=G.crushLine('late.plain');if(x&&hcNoticed.has(x))o.hcAfterNoticed++;}
      CR.at('10/26','lunch');CR.track('jungwon','crush');for(let d=G.dayOf('10/26');d<G.dayOf('11/30');d++){G.S.day=d;const x=G.crushLine('chatter.lunch');if(x&&W['chatter.lunch'].some(y=>y.t===x&&y.crush&&y.crush.jungwon))o.jw++;}
      return o})()""")
    ok(wl['hcBefore'] > 0 and wl['hcAfterNoticed'] == 0, f"the uncanny lines play before Haechan arrives and stop once he has: {wl}")
    ok(wl['jw'] > 0, 'the Gekkoukan buzz about the boy in the council room')

    # ── ui ──
    p.eval(r"""(()=>{const G=FemcGame,s=CR.at('4/20','late');CR.link('akihiko',1);delete s.crush;G.saveSlot(3);G.loadSlot(3);G.S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:-99};
      G.S.phone.lastInvite=9999;G.save();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    import time
    t0 = time.time(); seen = False
    while time.time() - t0 < 120:
        if p.eval("!!document.querySelector('.gs:not(.out) .gs-choices button') && FemcGame.S.day===FemcGame.dayOf('4/21') && FemcGame.S.slot==='afternoon'"):
            seen = True
            (OUT / 'optin.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
            break
        p.eval('CR.step()'); time.sleep(0.02)
    ok(seen, 'from a 4/20 save, sleeping into 4/21 brings the opt-in up in PE through the real UI')
    p.eval("document.querySelector('.gs:not(.out) .gs-choices button').click()")
    t0 = time.time()
    while time.time() - t0 < 60 and not p.eval("FemcGame.S.crush.seen.includes('cr-aki-optin')"):
        p.eval('CR.step()'); time.sleep(0.02)
    ok(p.eval("FemcGame.S.crush.seen.includes('cr-aki-optin') && FemcGame.crushTick('akihiko')==='noticed' && FemcGame.S.crush.lastDay===FemcGame.dayOf('4/21')"), 'the first option leans in: noticed, the moment recorded, the day marked')
    p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'counts': counts, 'scenePaths': n_paths, 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
