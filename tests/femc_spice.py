"""The spice batch (2026-10-24, data/spice-*.js): romance heat, gated by route and crush phase, with the morning after.

  python3 tests/femc_spice.py [--screenshots /absolute/dir]

counts     scenes per character and kind (late nights, moments, texts, day-after lines).
gating     romance-only scenes never fit on a friend route or before the route; the almosts fit only in their phases.
           Dating Akihiko with Haechan's route not chosen: only Haechan's almosts and "we can't" (never his full scenes).
           Kat's ruling: once Haechan's route is chosen too, both full sets fit (and any other romances chosen at once).
glow       a scene's { glow } holds the next day only: the morning-after moment plays first (past the gap and a routine),
           the day-after lines win their spot, nothing the day after that.
reach      simulated years for eight players (Akihiko from rank 7; his almosts then rank 9; Haechan on Runners and on
           strangers; both at once; Akihiko with Haechan's pull unchosen; Shinjiro; the three searchers): every spice
           scene plays for someone, none plays for anyone it's gated against, the late nights keep their spacing.
scenes     every spice scene down every choice path in every state it branches on (route, someone else's romance,
           heading, crush phase, dates, flags): finishes, every option reached, real faces and cast names.
ui         the near miss through the real UI, then the next morning's curfew talk.
Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, re, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-spice-'))
OUT.mkdir(parents=True, exist_ok=True)
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


# The crush test's browser helpers (CR.at / link / track / paths / step), read from its source so they stay one copy.
HELPERS = re.search(r'HELPERS = r"""(.*?)"""', (pathlib.Path(__file__).parent / 'femc_crush.py').read_text(), re.S).group(1)

SP = r"""
window.SP = (() => {
  const G = FemcGame;
  const nights = () => Object.values(G.LINKS).flatMap(l => (l.lateNights || []).filter(e => e.id.startsWith('sp-')).map(e => ({ link: l.id, e })));
  const moments = () => G.D.crush.moments.filter(m => m.id.startsWith('sp-'));
  const ROM = id => { const n = nights().find(x => x.e.id === id); if (n) return n.e.route === 'romance'; const m = moments().find(x => x.id === id); return !!(m && m.crush && [].concat(m.crush[m.who] || []).every(p => p === 'dating') && m.crush[m.who]); };
  // Effects a scene leaves behind ({ flag } / { glow } lines anywhere in it), applied as if it played.
  function effects(scene) { CR.walk(scene, l => { if (l && (l.flag || l.glow) && !l.t) G.effect(l); }); }
  // A dedicated player's rank on day d: every rank whose date has come (the rank-15 links to 15).
  const rankOn = (id, d) => { const l = G.LINKS[id]; return Math.min((l.ranks || []).filter(r => G.dayOf(r.after) <= d).length, l.maxRank || 10); };
  // One year from 7/1 to 3/4, played the way ui.js orders a slot (story, routine, crush moment, then a late night).
  function year(plan) {
    const s = CR.at('7/1', 'early'); const plays = [], nightDays = [];
    Object.keys(G.S.links).forEach(id => { if (!plan.links.includes(id)) delete G.S.links[id]; }); // CR.at starts story links at 10
    Object.entries(plan.tracks || {}).forEach(([id, ph]) => CR.track(id, ph));
    Object.entries(plan.flags || {}).forEach(([f, v]) => { s.flags[f] = v; });
    const hcLate = new Set(G.LINKS.haechan.ranks.map((r, i) => (r.slot || 'late') === 'late' ? G.dayOf(r.after) : null).filter(x => x !== null));
    for (let d = G.dayOf('7/1'); d <= G.dayOf('3/4'); d++) {
      s.day = d; const info = G.dayInfo(d); s.spent = {}; s.tonight = (d % 5 === 0 && !info.moon.full) ? 'battled' : null;
      if (d >= G.dayOf('8/8')) s.flags['joined-shinjiro'] = true;
      if (d >= G.dayOf('12/22')) s.flags['year-goes-on'] = true;
      if (plan.heading && d >= G.dayOf('12/12')) s.flags['hc-lean-' + plan.heading] = true;
      if (plan.heading && d >= G.dayOf('12/22')) s.flags['route-' + plan.heading] = true;
      for (const id of plan.links) {
        const r = rankOn(id, d); if (!r) { delete G.S.links[id]; continue; }
        const was = G.S.links[id] || {}, at = (plan.route || {})[id];
        CR.link(id, r, { route: was.route || (at && r >= at[0] ? at[1] : undefined) });
        if (!G.S.links[id].route) delete G.S.links[id].route;
      }
      for (const slot of G.slotsFor(info)) {
        s.slot = slot;
        const due = G.D.events.filter(e => !e.unlock && e.date === info.md && ({ darkhour: 'evening' }[e.slot] || e.slot || 'evening') === slot && !s.events.includes(e.id) && (!e.flag || s.flags[e.flag]));
        if (due.length) { due.forEach(e => s.events.push(e.id)); continue; }
        if (slot === 'late' && hcLate.has(d) && plan.links.includes('haechan')) continue; // his story rank takes the night
        const r = G.dailyLife(); if (r) { G.finishDailyLife(r.id); continue; }
        const c = G.crushDue();
        if (c) { if (c.optIn) G.crushApply({ [c.optIn]: 'in' }); effects(c.scene); G.finishCrush(c.id); plays.push([c.id, d, slot]); continue; }
        if (slot === 'late') { const ln = G.lateNightDue(); if (ln) { effects(ln.e.scene); G.finishLateNight(ln.e.id, 2); plays.push([ln.e.id, d, 'late']); nightDays.push(d); } }
      }
    }
    let gap = 99; for (let i = 1; i < nightDays.length; i++) gap = Math.min(gap, nightDays[i] - nightDays[i - 1]);
    const sp = plays.filter(x => x[0].startsWith('sp-'));
    return { ids: sp.map(x => x[0]), when: Object.fromEntries(sp.map(x => [x[0], G.mdOf(x[1])])), gap, n: plays.length,
      routes: Object.fromEntries(plan.links.map(id => [id, G.S.links[id]?.route || null])) };
  }
  return { nights, moments, ROM, effects, rankOn, year };
})();
"""

p = Page()
try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1000, 'height': 486, 'deviceScaleFactor': 1, 'mobile': False})
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with the spice files and no browser errors')
    p.eval(HELPERS)
    p.eval(SP)

    # ── counts ──
    counts = p.eval(r"""(()=>{const G=FemcGame,out={};const add=(who,kind)=>{(out[who]||={})[kind]=(out[who][kind]||0)+1;};
      SP.nights().forEach(x=>add(x.link,'late nights'));SP.moments().forEach(m=>add(m.id.startsWith('sp-dorm-')?'dorm':/^sp-(hc-|aki-hc-)/.test(m.id)?'haechan':m.who,'moments'));
      (G.D.texts.ambient||[]).filter(t=>t.id.startsWith('sp-tx-')).forEach(t=>add(t.id.startsWith('sp-tx-sees')||t.id.startsWith('sp-tx-sisters')?'dorm':t.thread,'texts'));
      Object.values(G.D.crush.world).flat().filter(x=>x.glow).forEach(x=>add(Object.keys(x.crush||{})[0]||'any','day-after lines'));
      return out})()""")
    print(json.dumps(counts))
    tot = lambda who: sum((counts.get(who) or {}).get(k, 0) for k in ('late nights', 'moments'))
    ok(tot('haechan') > tot('akihiko') >= 12, f"Haechan has the largest set ({tot('haechan')} scenes), Akihiko the next ({tot('akihiko')})")
    ok(all(tot(w) >= n for w, n in [('shinjiro', 3), ('jungwon', 2), ('jihoon', 2), ('minji', 1)]) and tot('dorm') >= 4, f"Shinjiro {tot('shinjiro')}, Jungwon {tot('jungwon')}, Jihoon {tot('jihoon')}, Minji {tot('minji')}, the dorm {tot('dorm')}")

    # ── gating ──
    g = p.eval(r"""(()=>{const G=FemcGame,out={friendFits:[],preRouteFull:[],takenHc:[],bothMissing:[],freeLeak:[],almostAfter:[]};
      // Does a spice scene fit on some day of its window in this state? (a fresh save per day; only that night unseen)
      const fitsSome=(id,set,days)=>{const n=SP.nights().find(x=>x.e.id===id),m=SP.moments().find(x=>x.id===id),e=n?n.e:m;
        const from=G.dayOf(e.after),to=G.dayOf(e.until||G.mdOf(from+21));
        for(let d=from;d<=to;d++){const info=G.dayInfo(d);if(info.type==='trip')continue;CR.at(G.mdOf(d),n?'late':m.slot);set(d);
          if(e.when==='tartarus')G.S.tonight='battled';
          [].concat(e.flag||[],e.flags||[]).forEach(f=>G.S.flags[f]=true);(e.events||[]).forEach(x=>{if(!G.S.events.includes(x))G.S.events.push(x)});
          if(e.heading)G.S.flags['route-'+[].concat(e.heading)[0]]=true;
          if(e.glow){const w=[].concat(e.glow)[0],[who,kind]=(typeof w==='string'?w:'*').split(':');G.S.glow={who:who==='*'?'haechan':who,kind:kind||'night',day:d-1};}
          if(n){G.S.lateNights={seen:SP.nights().map(x=>x.e.id).filter(x=>x!==id).concat(Object.values(G.LINKS).flatMap(l=>(l.lateNights||[]).map(x=>x.id)).filter(x=>x!==id)),lastDay:-99};if(G.lateNightDue(d)?.e.id===id)return true;}
          else if(G.crushFits(m,m.slot,d,info))return true;}
        return false;};
      const rank=(id,d)=>Math.max(SP.rankOn(id,d),1);
      const all=[...SP.nights().map(x=>({id:x.e.id,who:x.link,e:x.e})),...SP.moments().map(m=>({id:m.id,who:m.who,e:m}))];
      // 1) the link's friend route: none of its romance scenes fit.
      all.filter(x=>SP.ROM(x.id)).forEach(x=>{if(fitsSome(x.id,d=>{CR.link(x.who,rank(x.who,d),{route:'friend'});CR.track(x.who,'faded');}))out.friendFits.push(x.id);});
      // 2) Haechan's route not chosen (no route, the pull growing), and dating Akihiko: which of his scenes fit?
      const hcAll=all.filter(x=>x.who==='haechan'&&x.id.startsWith('sp-hc-'));
      hcAll.forEach(x=>{const hit=fitsSome(x.id,d=>{CR.link('haechan',Math.min(rank('haechan',d),7));CR.link('akihiko',rank('akihiko',d),{route:'romance'});});if(hit)out.takenHc.push(x.id);
        if(SP.ROM(x.id)&&fitsSome(x.id,d=>{CR.link('haechan',Math.min(rank('haechan',d),7));}))out.preRouteFull.push(x.id);});
      // the free one never fits while she's with someone
      if(fitsSome('sp-hc-ln-headphones',d=>{CR.link('haechan',rank('haechan',d));CR.link('jihoon',8,{route:'romance'});}))out.freeLeak.push('sp-hc-ln-headphones');
      // 3) both routes chosen (Kat's ruling): every romance scene of both fits.
      all.filter(x=>SP.ROM(x.id)&&['akihiko','haechan'].includes(x.who)&&!/hc-sees|aki-sees/.test(x.id)).forEach(x=>{const hit=fitsSome(x.id,d=>{CR.link('haechan',rank('haechan',d),d>=G.dayOf('12/18')?{route:'romance'}:{});CR.link('akihiko',rank('akihiko',d),{route:'romance'});});if(!hit)out.bothMissing.push(x.id);});
      ['sp-hc-aki-sees','sp-aki-hc-sees'].forEach(id=>{if(!fitsSome(id,d=>{CR.link('haechan',rank('haechan',d),{route:'romance'});CR.link('akihiko',rank('akihiko',d),{route:'romance'});}))out.bothMissing.push(id);});
      // 4) the almosts stop at the route: Akihiko's summer door and Haechan's pre-route scenes never fit once dating.
      ['sp-aki-ln-door'].forEach(id=>{if(fitsSome(id,d=>{CR.link('akihiko',rank('akihiko',d),{route:'romance'});}))out.almostAfter.push(id);});
      ['sp-hc-ln-headphones','sp-hc-ln-we-cant','sp-hc-first-touch','sp-hc-korean','sp-hc-stitches'].forEach(id=>{if(fitsSome(id,d=>{CR.link('haechan',8,{route:'romance'});CR.link('akihiko',rank('akihiko',d),{route:'romance'});}))out.almostAfter.push(id);});
      out.hcAlmostIds=hcAll.filter(x=>!SP.ROM(x.id)).map(x=>x.id);
      return out})()""", timeout=900)
    print(json.dumps(g))
    ok(not g['friendFits'], f"romance-only scenes never fit on that link's friend route: {g['friendFits']}")
    ok(not g['preRouteFull'], f"Haechan's full scenes never fit before his route is chosen: {g['preRouteFull']}")
    ok(set(g['takenHc']) == {'sp-hc-ln-we-cant', 'sp-hc-first-touch', 'sp-hc-korean', 'sp-hc-stitches'}, f"dating Akihiko with Haechan's route unchosen, only his almosts and 'we can't' fit: {g['takenHc']}")
    ok(not g['freeLeak'], "the his-room almost (free) never fits while she's with anyone")
    ok(not g['bothMissing'], f"with both routes chosen, every full scene of both fits, and the triangle fallout too: {g['bothMissing']}")
    ok(not g['almostAfter'], f"the almosts stop once the route is chosen: {g['almostAfter']}")

    # ── glow ──
    gl = p.eval(r"""(()=>{const G=FemcGame,o={};const at=(md,slot)=>{const s=CR.at(md,slot);CR.link('akihiko',8,{route:'romance'});return s;};
      let s=at('10/27','late');G.S.day=G.dayOf('10/27');G.setGlow('akihiko:caught');const glow=JSON.parse(JSON.stringify(G.S.glow));
      // the next morning: past the gap (a moment played yesterday) and before a routine
      s=at('10/28','early');G.S.glow=glow;G.S.crush.lastDay=G.dayOf('10/27');o.next=G.crushDue()?.id||null;o.routineYields=G.dailyLife()===null;
      s=at('10/29','early');G.S.glow=glow;G.S.crush.lastDay=-99;o.after=G.crushDue()?.id||null;
      s=at('10/27','early');G.S.glow=glow;o.same=G.crushDue()?.id||null;
      // the day-after lines win their spot every time; never the day after that
      let win=0,tries=0,later=0;for(const md of ['10/28','11/4','11/11','11/18']){s=at(md,'lunch');G.S.glow={who:'akihiko',kind:'night',day:G.dayOf(md)-1};tries++;const x=G.crushLine('lunch.clear');if(x&&G.D.crush.world['lunch.clear'].some(y=>y.glow&&y.t===x))win++;
        G.S.day+=1;const y=G.crushLine('lunch.clear');if(y&&G.D.crush.world['lunch.clear'].some(z=>z.glow&&z.t===y))later++;}
      o.win=win;o.tries=tries;o.later=later;
      // a Haechan night: the Akihiko day-after lines stay out, his come in
      s=at('1/15','evening');CR.link('haechan',9,{route:'romance'});G.S.glow={who:'haechan',kind:'night',day:G.dayOf('1/14')};const sub=G.crushLine('evening.sub');o.hcLine=!!sub&&G.D.crush.world['evening.sub'].some(y=>y.glow==='haechan'&&y.t===sub);
      // ifGlow in a scene condition, and the save field on slots
      o.ifGlow=G.branch({ifGlow:'haechan:night',then:[1],else:[2]})[0];
      G.saveSlot(3);G.S.glow=null;G.loadSlot(3);o.saved=G.S.glow&&G.S.glow.who==='haechan';localStorage.removeItem('kg-femc-revamp-slot3');
      return o})()""")
    print(json.dumps(gl))
    ok(gl['next'] == 'sp-dorm-curfew-aki' and gl['routineYields'], f"the morning after the near miss, Mitsuru's curfew talk comes first (past the gap; a routine waits): {gl['next']}")
    ok(gl['after'] != 'sp-dorm-curfew-aki' and gl['same'] != 'sp-dorm-curfew-aki', f"the day-after moment holds only the day after (two days on: {gl['after']}; the same day: {gl['same']})")
    ok(gl['win'] == gl['tries'] and gl['later'] == 0, f"the day-after lines win their spot every time ({gl['win']}/{gl['tries']}) and never the day after that")
    ok(gl['hcLine'] and gl['ifGlow'] == 1 and gl['saved'], 'a Haechan night brings his day-after lines; ifGlow reads it; the glow survives save slots')

    # ── reach ──
    PLANS = {
        'aki7': {'links': ['akihiko', 'haechan'], 'route': {'akihiko': [7, 'romance'], 'haechan': [8, 'friend']}, 'tracks': {'akihiko': 'puppy'}},
        'akiAlmost9': {'links': ['akihiko'], 'route': {'akihiko': [9, 'romance']}, 'tracks': {'akihiko': 'puppy'}},
        'hcR': {'links': ['haechan'], 'route': {'haechan': [8, 'romance']}, 'tracks': {'akihiko': 'out'}, 'heading': 'R'},
        'hcS': {'links': ['haechan', 'hyein', 'hanni', 'yunjin'], 'route': {'haechan': [8, 'romance']}, 'tracks': {'akihiko': 'out'}, 'heading': 'S'},
        'both': {'links': ['akihiko', 'haechan'], 'route': {'akihiko': [7, 'romance'], 'haechan': [8, 'romance']}, 'tracks': {'akihiko': 'puppy'}},
        'akiPull': {'links': ['akihiko', 'haechan'], 'route': {'akihiko': [9, 'romance'], 'haechan': [8, 'friend']}, 'tracks': {'akihiko': 'puppy'}, 'flags': {'sp-test-pull': True}},
        'shin': {'links': ['shinjiro', 'akihiko'], 'route': {'shinjiro': [8, 'romance']}, 'tracks': {'akihiko': 'out', 'shinjiro': 'puppy'}},
        'searchers': {'links': ['jihoon', 'minji', 'jungwon'], 'route': {'jihoon': [8, 'romance'], 'minji': [8, 'romance'], 'jungwon': [8, 'romance']}, 'tracks': {'akihiko': 'out', 'jihoon': 'puppy', 'minji': 'puppy', 'jungwon': 'almost'}},
    }
    seen, per = set(), {}
    for name, plan in PLANS.items():
        r = p.eval(f"SP.year({json.dumps(plan)})", timeout=600)
        per[name] = r
        seen |= set(r['ids'])
        print(name, len(r['ids']), r['gap'], json.dumps(r['routes']))
        ok(len(r['ids']) == len(set(r['ids'])) and r['gap'] >= 3, f"{name}: {len(r['ids'])} spice scenes, none twice, late nights at least three nights apart")
    allids = p.eval("[...SP.nights().map(x=>x.e.id),...SP.moments().map(m=>m.id)]")
    missing = [i for i in allids if i not in seen]
    ok(not missing, f"every spice scene plays for some player ({len(allids)} in all): missing {missing}")
    hc_full = [i for i in allids if i.startswith('sp-hc-ln-') and i not in ('sp-hc-ln-headphones', 'sp-hc-ln-we-cant')] + ['sp-hc-cupboard', 'sp-hc-booth']
    ok(not [i for i in per['aki7']['ids'] if i in hc_full], "Haechan's friend route while dating Akihiko: none of his full scenes")
    ok('sp-hc-ln-we-cant' in per['aki7']['ids'] + per['akiPull']['ids'], "dating Akihiko, his pull unchosen: 'we can't' plays")
    ok({'sp-hc-ln-room', 'sp-aki-ln-snowed'} <= set(per['both']['ids']) and any(i in per['both']['ids'] for i in ('sp-hc-aki-sees', 'sp-aki-hc-sees')), "both routes chosen: both full sets play, with the triangle in the fallout")
    ok('sp-hc-ln-night-s' in per['hcS']['ids'] and 'sp-hc-ln-night-r' not in per['hcS']['ids'] and 'sp-hc-ln-night-r' in per['hcR']['ids'] and 'sp-hc-korean' in per['hcS']['ids'] and 'sp-hc-korean' not in per['hcR']['ids'], 'his night follows the world he settles into (Runners or strangers), and the Korean-only scene is strangers only')
    ok(not [i for i in per['hcR']['ids'] + per['hcS']['ids'] if i.startswith('sp-aki-')], "Akihiko's scenes stay out of a save where she isn't with him")
    ok(all(i in per['shin']['ids'] for i in ('sp-shin-counter', 'sp-shin-coat', 'sp-shin-hair')), f"Shinjiro's three play on his romance route: {[per['shin']['when'].get(i) for i in ('sp-shin-counter', 'sp-shin-coat', 'sp-shin-hair')]}")
    shin_dates = p.eval("(()=>{const G=FemcGame;return " + json.dumps([per['shin']['when'].get(i) for i in ('sp-shin-counter', 'sp-shin-coat', 'sp-shin-hair')]) + ".map(md=>G.dayOf(md)<G.dayOf('10/4'))})()")
    ok(all(shin_dates), f"and every one of them before his 10/4: {shin_dates}")

    # ── scenes ──
    n_paths = p.eval(r"""(()=>{const G=FemcGame;let n=0;
      const items=[...SP.nights().map(x=>({id:x.e.id,who:x.link,e:x.e,slot:'late'})),...SP.moments().map(m=>({id:m.id,who:m.who,e:m,slot:m.slot}))];
      items.forEach(({id,who,e,slot})=>{
        let taken=false,heads=false,roms=new Set(),dates=new Set(),flags=new Set(),crushes={};
        CR.walk(e.scene,l=>{if(l.ifTaken)taken=true;if(l.ifRomance)roms.add(l.ifRomance);if(l.ifHeading)heads=true;if(l.ifAfter)dates.add(l.ifAfter);if(l.ifBefore)dates.add(l.ifBefore);
          if(l.ifFlag)[].concat(l.ifFlag).forEach(f=>flags.add(f));if(l.ifCrush)Object.entries(l.ifCrush).forEach(([k,v])=>{(crushes[k]||=new Set());[].concat(v).forEach(x=>crushes[k].add(x));});});
        const phases=e.crush&&e.crush[who]?[].concat(e.crush[who]):[null];
        const dayList=[e.after,...[...dates].flatMap(md=>[md,G.mdOf(G.dayOf(md)-1)])].filter(md=>G.dayOf(md)>=G.dayOf(e.after));
        const others=taken||roms.size?[null,'akihiko','haechan','rio']:[null];
        const H=heads?[null,'S','H','stay','true']:[null];
        const states=[];
        dayList.forEach(md=>phases.forEach(ph=>others.forEach(ex=>(ex?[null]:H).forEach(h=>[false,...(flags.size?[true]:[])].forEach(fl=>states.push(()=>{
          CR.at(md,slot);G.S.tonight=e.when==='tartarus'?'battled':null;
          const route=e.route||(ph==='dating'?'romance':undefined);
          CR.link(who,Math.max(e.rank||1,(e.ranks||{})[who]||1,8),route?{route}:{});
          if(ph)CR.track(who,ph);Object.entries(e.crush||{}).forEach(([k,v])=>{if(k!==who){CR.track(k,[].concat(v)[0]);if([].concat(v)[0]==='dating')CR.link(k,9,{route:'romance'});}});
          if(ex&&ex!==who)CR.link(ex,9,{route:'romance'});
          if(h)G.S.flags['route-'+h]=true;else if(e.heading)G.S.flags['route-'+[].concat(e.heading)[0]]=true;
          if(fl)flags.forEach(f=>G.S.flags[f]=true);
        }))))));
        n+=CR.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time,label:'x',link:who},'spice/'+id,states);
      });
      return n})()""", timeout=1800)
    bad = p.eval('CR.bad')
    ok(not bad, f'every spice scene finishes in every state it branches on and reaches every option, with real faces and names: {bad[:6]}')
    ok(n_paths > 150, f'{n_paths} scene paths played')

    # ── ui ──
    p.eval(r"""(()=>{const G=FemcGame,s=CR.at('9/24','late');CR.link('akihiko',7,{route:'romance'});s.flags['sp-aki-curfew']=true;s.tonight=null;
      s.lateNights={seen:Object.values(G.LINKS).flatMap(l=>(l.lateNights||[]).map(e=>e.id)).filter(x=>x!=='sp-aki-ln-caught'),lastDay:-99};
      s.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:-99};s.crush.seen=G.D.crush.moments.map(m=>m.id).filter(x=>x!=='sp-dorm-curfew-aki');s.crush.lastDay=s.day;
      s.phone.lastInvite=9999;G.save();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.gs[aria-label*=\"Late night\"]:not(.out)')", timeout=30)
    (OUT / 'caught.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    t0 = time.time()
    while time.time() - t0 < 120 and not p.eval("FemcGame.S.crush.seen.includes('sp-dorm-curfew-aki')"):
        if p.eval("FemcGame.S.day===FemcGame.dayOf('9/25') && !!document.querySelector('.gs:not(.out)') && /curfew talk/.test(document.querySelector('.gs:not(.out)').textContent||'')") and not (OUT / 'curfew.png').exists():
            (OUT / 'curfew.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
        p.eval('CR.step()'); time.sleep(0.02)
    ui = p.eval("(()=>{const G=FemcGame;return {night:G.S.lateNights.seen.includes('sp-aki-ln-caught'),caught:!!G.S.flags['sp-aki-caught'],glow:G.S.glow,talk:G.S.crush.seen.includes('sp-dorm-curfew-aki'),day:G.mdOf(G.S.day)}})()")
    print(json.dumps(ui))
    ok(ui['night'] and ui['caught'] and ui['glow'] and ui['glow']['kind'] == 'caught', f"the near miss plays through the real UI instead of the bedtime line and leaves its mark: {ui}")
    ok(ui['talk'] and ui['day'] == '9/25', "the next morning, Mitsuru's curfew talk plays through the UI")

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'counts': counts, 'scenePaths': n_paths, 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
