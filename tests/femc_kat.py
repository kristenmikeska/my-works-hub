"""Kat & Ethan, the hidden couple link (links/kat.js, data/living-kat.js): missable and findable.

Run: python3 tests/femc_kat.py
Needs Chrome; temporary profile and loopback server, never the player's saves. Spoiler-free output.

hidden     before they're found the link is nowhere: not on the map, not in the evening menu, not met, not registered
findable   a simulated year of going out (every other link met, so every run-in competes) finds them when Solar stops,
           starting in May, July, September, mid-October or mid-November; the three stops are on three different days,
           in three different places, and the third one is the scene that swaps numbers
missable   always walking past never finds them, all year; walking past six of the eight leaves too few to ever find them
after      once found, the eight encounters never come back, the link is on the Strip on its evenings, and their own
           run-ins (gated on found-kat and their rank) can play
ui         the third stop through the real Go Out screen and scene player: found, met, registered; then rank 1 through the
           Strip's evening card
"""
import json, pathlib, sys
from femc_browser import Page

ROOT = pathlib.Path(__file__).resolve().parents[1]
FAILS = []


def ok(cond, msg):
    print(('PASS ' if cond else 'FAIL ') + msg, flush=True)
    if not cond:
        FAILS.append(msg)


HELPERS = r"""
window.KT = (() => {
  const G = FemcGame, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off');
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const L = G.LINKS.kat, ENC = G.D.runIns.filter(e => e.finds === 'kat'), STOPS = L.secret.count.of;
  function at(md, slot, everyone = true) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    G.S.day = G.dayOf(md); G.S.slot = slot;
    if (everyone) meet(G.S.day);
    return G.S;
  }
  // Everyone else met by day d (so every other run-in competes with theirs).
  function meet(d) { Object.values(G.LINKS).forEach(l => { if (l.status === 'stub' || l.secret || l.storyOnly) return; if (d >= G.dayOf(l.starts || '4/8') && !G.S.met.includes(l.id)) G.S.met.push(l.id); }); }
  const PLAN = [['strip', 'books', 'after'], ['mall', 'arcade', 'after'], ['station', 'vending', 'after'], ['port', 'pier', 'after'],
    ['portisland', 'alley', 'after'], ['shrine', 'pray', 'after'], ['strip', 'bathhouse', 'evening'], ['mall', 'karaoke', 'evening']];
  // A year of going out once a day from md (rotating through PLAN). stop(i): stop at the i-th encounter (0-based)?
  function season(md, stop, end = '3/4') {
    const S = at(md, 'after'), log = [], hidden = [];
    for (let d = G.dayOf(md); d <= G.dayOf(end); d++) {
      meet(d);
      const [area, act, slot] = PLAN[d % PLAN.length];
      S.day = d; S.slot = slot;
      if (!S.flags['found-kat']) {
        // Hidden everywhere until found.
        if (G.linkStatus(L, d, 'evening').ok || G.secretsDue(d).some(l => l.id === 'kat') || G.linksAt('strip', 'evening').some(l => l.id === 'kat')) hidden.push(G.mdOf(d));
      }
      // Once found, a rank every ten days or so (their own run-ins wait on ranks 2-4).
      if (S.flags['found-kat'] && d % 10 === 0) { const pr = G.progress('kat'); pr.rank = Math.min(10, (pr.rank || 0) + 1); }
      const e = G.runInDue({ act, area, slot });
      if (!e) continue;
      if (e.finds === 'kat') {
        const i = log.length, line = e.scene.find(l => l.choose), go = stop(i), o = line.choose[go ? 0 : 1];
        G.applyChoice(o, null);
        const tail = go ? o.then.find(l => l.ifCount && l.ifCount.min === 3) : null;
        log.push({ id: e.id, md: G.mdOf(d), stop: go, third: !!(tail && G.branch(tail) === tail.then) });
      } else if (e.who === 'kat') log.push({ id: e.id, md: G.mdOf(d), after: true });
      G.finishRunIn(e.id);
    }
    const found = !!S.flags['found-kat'];
    return { found, met: S.met.includes('kat'), reg: S.registered.includes('kat'), log, hidden: hidden.slice(0, 3),
      stops: STOPS.filter(f => S.flags[f]).length, encounters: ENC.length };
  }
  return { at, season, ENC, STOPS, copy };
})();
"""


def step_js():
    return r"""(()=>{const c=document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)');if(c){c.click();return 'choice'}
      const o=document.querySelector('.gs-title, .g-card, .g-actcard, .g-datecard, .gs-rank');if(o){o.click();return 'card'}
      const g=document.querySelector('.gs:not(.out)');if(g){g.click();return 'scene'}return 'idle'})()"""


p = Page()
try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.goto('femc-game.html?debug=1')
    assert not p.console(), p.console()
    p.eval(HELPERS)

    # ── hidden ──
    h = p.eval(r"""(()=>{const G=FemcGame,s=KT.at('5/12','evening');const st=G.linkStatus(G.LINKS.kat,G.dayOf('5/12'),'evening');
      return {reason:st.reason,secret:G.secretsDue().map(l=>l.id),map:G.linksAt('strip','evening').map(l=>l.id),met:G.isMet('kat'),
        enc:KT.ENC.length,keys:KT.ENC.map(e=>e.id),label:KT.ENC.every(e=>e.label==='Two huskies'&&!(e.met||[]).length&&(e.noFlags||[]).includes('found-kat')),
        need:G.LINKS.kat.secret.count.min,arcana:G.LINKS.kat.arcana,ranks:G.LINKS.kat.ranks.filter(r=>r.scene).length,
        places:new Set(G.LINKS.kat.ranks.map(r=>r.place)).size}})()""")
    print('hidden', json.dumps(h))
    ok(h['reason'] == 'unwritten' and 'kat' not in h['secret'] and 'kat' not in h['map'] and not h['met'], 'hidden before found: not on the map, not in the evening menu, not met')
    ok(h['enc'] == 8 and h['label'] and h['need'] == 3, f"eight encounters, no name on them, none needs anyone met, three stops to find them ({h['keys']})")
    ok(h['ranks'] == 10 and h['places'] >= 8, f"ten ranks in {h['places']} different places, arcana {h['arcana']}")

    # ── findable ──
    for md in ['5/6', '7/1', '9/1', '10/15', '11/10']:
        r = p.eval(f"KT.season('{md}', () => true)", timeout=300)
        enc = [x for x in r['log'] if not x.get('after')]
        stops = [x for x in enc if x['stop']]
        days = {x['md'] for x in stops}
        found_at = next((x['md'] for x in stops if x['third']), None)
        print(md, json.dumps({'found': r['found'], 'at': found_at, 'encounters': [(x['id'], x['md']) for x in enc], 'theirRunIns': [x['id'] for x in r['log'] if x.get('after')]}))
        ok(r['found'] and r['met'] and r['reg'] and len(stops) == 3 and len(days) == 3 and stops[-1]['third'] and not r['hidden'],
           f"from {md}, stopping finds them on the third stop ({found_at}), three different days and places, hidden until then")
        if md == '5/6':
            ok(len(r['log']) > len(enc), 'their own run-ins come after they are found')

    # ── missable ──
    r = p.eval("KT.season('5/6', () => false)", timeout=300)
    print('never stop', json.dumps({'found': r['found'], 'seen': [(x['id'], x['md']) for x in r['log']]}))
    ok(not r['found'] and not r['met'] and not r['reg'] and len(r['log']) >= 6 and not r['hidden'] and all(not x.get('after') for x in r['log']),
       f"walking past every time never finds them, all year ({len(r['log'])} encounters passed), and they stay hidden")
    r = p.eval("KT.season('5/6', i => i >= 6)", timeout=300)
    ok(not r['found'] and r['stops'] <= 2, f"walking past the first six leaves too few: {r['stops']} stops, never found")
    r = p.eval("KT.season('5/6', i => i >= 2)", timeout=300)
    ok(r['found'], 'walking past two and stopping for the next three still finds them')

    # ── after ──
    a = p.eval(r"""(()=>{const G=FemcGame;let tue=G.dayOf('6/16');while(G.dayInfo(tue).dow!==2)tue++;const s=KT.at(G.mdOf(tue),'evening',false);s.flags['found-kat']=true;s.met.push('kat');
      const again=KT.ENC.filter(e=>G.runInFits(e,{act:'vending',area:'station',slot:'evening'})||G.runInFits(e,{act:'pier',area:'port',slot:'after'})).map(e=>e.id);
      const dow=G.dayInfo(tue).dow;const st=G.linkStatus(G.LINKS.kat,tue,'evening');
      s.day=tue+1;const wed=G.linkStatus(G.LINKS.kat,s.day,'evening');
      return {again,dow,tue:st.ok,wed:wed.reason,map:(s.day=tue,G.linksAt('strip','evening').map(l=>l.id))}})()""")
    ok(not a['again'] and a['tue'] and a['wed'] == 'elsewhere' and 'kat' in a['map'], f"once found: no encounter comes back, on the Strip on Tuesday evenings, not Wednesdays ({a})")

    # ── perks ──
    pk = p.eval(r"""(()=>{const G=FemcGame,s=KT.at('6/20','after',false);s.flags['found-kat']=true;s.met.push('kat');
      const acts=G.D.places.activities,hag=acts.find(a=>a.id==='hagakure'),pier=acts.find(a=>a.id==='pier');
      const before={cost:G.actCost(hag),kind:s.stats.kindness};
      s.links.kat={rank:10,xp:0,seen:[],rankDay:{},push:0,reversed:false};
      const cost=G.actCost(hag),r=G.doActivity(pier);
      return {rows:FemcBuild.PERKS.filter(p=>p.link==='kat').map(p=>p.rank+':'+p.type+':'+(p.stub?'stub':'ok')),before:before.cost,cost,
        line:r.text===FemcBuild.PERKS.find(p=>p.id==='kat-8').fx.actLine.pier,kind:s.stats.kindness-before.kind,
        dog:!!G.perkOn('weekly')&&G.perkOn('weekly').some(p=>p.id==='kat-3')}})()""")
    print('perks', json.dumps(pk))
    ok(pk['rows'] == ['3:daily:ok', '6:daily:ok', '8:daily:ok', '10:max:ok'] and pk['cost'] == round(pk['before'] * 0.9) and pk['line'] and pk['kind'] >= 1 and pk['dog'],
       'four perks, none stubbed: the Hagakure discount, the pier walk (its line and +1 Kindness) and the Sunday walk are on')

    # ── ui: the third stop through Go Out, then rank 1 ──
    p.eval(r"""(()=>{const G=FemcGame,s=KT.at('9/18','after',false);s.flags['kat-stop-river']=true;s.flags['kat-stop-shrine']=true;
      s.runIns.seen=KT.ENC.filter(e=>!['ri-kat-pier'].includes(e.id)).map(e=>e.id).concat(G.D.runIns.filter(e=>!e.finds).map(e=>e.id));s.runIns.lastDay=s.day-5;s.dailyLife.lastDay=s.day;
      document.querySelectorAll('.gs,.g-overlay,.gs-rank').forEach(x=>x.remove());FemcGameUI.goOut('after','port');return true})()""")
    p.wait("!!document.querySelector('[data-act=\"pier\"]')")
    p.eval("document.querySelector('[data-act=\"pier\"]').click();true")
    p.wait("!!document.querySelector('.g-overlay [data-confirm]')")
    p.eval("document.querySelector('.g-overlay [data-confirm]').click();true")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    seen_faces = set()
    for _ in range(600):
        if not p.eval("!!document.querySelector('.gs:not(.out)')"):
            break
        src = p.eval("(document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')||{}).src||''")
        if '/portraits/' in src:
            seen_faces.add(src.split('/portraits/')[1].split('/')[0])
        p.eval(step_js())
    u = p.eval("({found:!!FemcGame.S.flags['found-kat'],met:FemcGame.isMet('kat'),reg:FemcGame.S.registered.includes('kat'),stop:!!FemcGame.S.flags['kat-stop-pier'],seen:FemcGame.S.runIns.seen.includes('ri-kat-pier')})")
    ok(all(u.values()) and {'kat', 'ethan'} <= seen_faces, f"the third stop through Go Out and the scene player finds them ({u}; faces {sorted(seen_faces)})")
    p.eval(r"""(()=>{const G=FemcGame,s=G.S;let d=G.dayOf('9/19');while(![0,2,5].includes(G.dayInfo(d).dow)||G.dayInfo(d).type==='trip')d++;s.day=d;s.slot='evening';s.spent={};s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;
      document.querySelectorAll('.gs,.g-overlay,.gs-rank').forEach(x=>x.remove());FemcGameUI.goOut('evening','strip');return G.dayInfo(s.day).dow})()""")
    p.wait("!!document.querySelector('[data-link=\"kat\"]')")
    p.eval("document.querySelector('[data-link=\"kat\"]').click();true")
    for _ in range(40):
        if p.eval("!!document.querySelector('.gs:not(.out)')"):
            break
        p.eval("(()=>{const b=document.querySelector('.g-overlay [data-confirm], .g-overlay .g-btn.pink');if(b)b.click();return true})()")
        p.eval("new Promise(r=>setTimeout(r,100))")
    for _ in range(800):
        if not p.eval("!!document.querySelector('.gs:not(.out), .gs-rank, .g-card')") and p.eval("(FemcGame.progress('kat').seen||[]).includes(0)"):
            break
        p.eval(step_js())
    r1 = p.eval("({seen:FemcGame.progress('kat').seen,rank:FemcGame.progress('kat').rank,xp:FemcGame.progress('kat').xp})")
    ok(0 in r1['seen'], f"rank 1 plays through the Strip's evening card ({r1})")
    errs = p.console()
    ok(not errs, f'no browser errors {errs[:3]}')
finally:
    p.close()
print('FAILED: ' + '; '.join(FAILS) if FAILS else 'ALL PASSED')
sys.exit(1 if FAILS else 0)
