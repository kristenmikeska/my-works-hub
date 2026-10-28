"""Memory-card reachability (2026-10-27, after the HOAX sync made every card NO_DROP; strangers sync batch).

  python3 tests/femc_fragments.py [--only sources,reach,release,drop]

sources  every memory card has at least one scene that gives it (core.js fragSources: story events, link ranks, job shifts);
         the only cards that hang on a two-way choice are the three crossroads' pairs.
reach    the counting check, on every path through the three crossroads (12 paths; New Game+ is a fresh year, so the same):
         every fragment gate (each link's gate by its start, the Runners arrivals' R5 by 12/13, Mark's R7, Wren's 18 and 24,
         each world's door 6 by the solstice and door 9 by graduation, which the true ending needs) is reachable from scenes
         alone, and the Haenim memory nodes' cards are reachable once released cards can drop. Also shows what was at risk
         before this batch (no late strangers card, no release): a strangers 9 out of reach on some paths, one node's card lost.
release  core.js dropsOk on real saves: nothing before a scene has had its chance; the card she didn't follow at each
         crossroad once it has played; a card with a link source only once that rank is reached (math homework, No Service,
         the late strangers card); a missed story event a week after its date (old saves); job cards never; a handoff's
         request carries the list; New Game+ starts with none.
drop     battle side (practice page, tartarus.js event room): a released card drops; without a release (or with no handoff,
         practice) nothing scene-awarded does.
Isolated browser profile and server; never the player's saves."""
import argparse, itertools, json, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
args = ap.parse_args()
ONLY = [x for x in args.only.split(',') if x]
want = lambda n: not ONLY or n in ONLY
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


CHOICE = {  # crossroad event -> the card each option gives (None: the hidden option that follows neither)
    'a4-crossroad-1': {'R': 'runners-trophy', 'H': 'hoax-ladder'},
    'a5-jungwon-awakens': {'S': 'strangers-low-tide', 'H': 'hoax-math-homework'},
    'a5-crossroad-3': {'R': 'runners-rooftop', 'S': 'strangers-suture-kit', 'none': None},
}
WORLD = {'runners-': 'R', 'strangers-': 'S', 'hoax-': 'H'}
world = lambda cid: next(w for p, w in WORLD.items() if cid.startswith(p))

p = Page()
try:
    p.goto('femc-game.html')
    info = p.eval(r"""(()=>{const G=FemcGame,src=G.fragSources(),L=G.LINKS;
      const links={};Object.values(L).forEach(l=>{links[l.id]={starts:l.starts||null,gate:l.gate||null,forced:l.forced||[],after:(l.ranks||[]).map(r=>r&&r.after||null),rankGate:(l.ranks||[]).map(r=>r&&r.gate||null)}});
      const ev={};G.D.events.forEach(e=>{ev[e.id]={date:e.date,unlock:e.unlock||null}});
      const cards=G.D.battle.memories.map(m=>({id:m.id,noDrop:m.noDrop}));
      const nodes=[];const walk=x=>{if(Array.isArray(x))x.forEach(walk);else if(x&&typeof x==='object'){if(x.id&&typeof x.memory==='string')nodes.push([x.id,x.memory]);Object.values(x).forEach(walk)}};walk(G.D.battle.tree);
      return {src,links,ev,cards,nodes,doors:G.D.flags.doors}})()""")
    src, links, ev, cards = info['src'], info['links'], info['ev'], info['cards']
    day = lambda md: p.eval(f"FemcGame.dayOf('{md}')") if md else None
    DAY = {}
    def d(md):
        if md not in DAY: DAY[md] = day(md)
        return DAY[md]

    if want('sources'):
        ok(all(c['noDrop'] for c in cards), f'every memory card is NO_DROP ({len(cards)} cards)')
        nosrc = [c['id'] for c in cards if not src.get(c['id'])]
        ok(not nosrc, f'every card has a scene that gives it (none without: {nosrc})')
        for e, opts in CHOICE.items():
            got = sorted({c for c, ss in src.items() for s in ss if s.get('event') == e})
            ok(got == sorted(x for x in opts.values() if x), f'{e} gives exactly its pair {got}')
        ok('strangers-koi' in src and any(s.get('link') == 'yunjin' and s.get('rank') == 10 for s in src['strangers-koi']), 'the late strangers card comes from Yunjin rank 10')

    def availability(path, koi=True):
        """card -> ('sure', day) guaranteed by story / forced ranks, ('opt', day) by an optional link or job, ('drop', day) only
        as a released Tartarus drop, or None. path = {event: option}."""
        out = {}
        for c in [c['id'] for c in cards]:
            if c == 'strangers-koi' and not koi: continue
            best = None
            def take(kind, dd):
                nonlocal best
                rank = {'sure': 0, 'opt': 1, 'drop': 2}
                if best is None or (rank[kind], dd) < (rank[best[0]], best[1]): best = (kind, dd)
            choiceLost = []
            for s in src.get(c, []):
                if 'event' in s:
                    e = s['event']
                    if e in CHOICE:
                        if CHOICE[e].get(path[e]) == c: take('sure', d(ev[e]['date']))
                        else: choiceLost.append(d(ev[e]['date']))
                    else: take('sure', d(ev[e]['date']))
                elif 'link' in s:
                    L = links[s['link']]; after = L['after'][s['rank'] - 1]
                    dd = d(after) if after else d(L['starts'] or '4/8')
                    take('sure' if s['rank'] in L['forced'] else 'opt', dd)
                else:
                    take('opt', d('5/16'))
            # Released once every source has had its chance: a choice-only card she didn't follow drops after its crossroad.
            if best is None and choiceLost: best = ('drop', max(choiceLost))
            out[c] = best
        return out

    def count(av, w, by, kinds):
        return sum(1 for c, a in av.items() if a and world(c) == w and a[0] in kinds and a[1] <= by)

    if want('reach'):
        paths = [dict(zip(CHOICE, combo)) for combo in itertools.product(*[list(o) for o in CHOICE.values()])]
        ok(len(paths) == 12, '12 paths through the three crossroads')
        SURE, SCENES, ALL = ('sure',), ('sure', 'opt'), ('sure', 'opt', 'drop')
        gate_fail, before = [], []
        for path in paths:
            av = availability(path)
            tot = lambda by, kinds: sum(count(av, w, by, kinds) for w in 'RSH')
            name = '/'.join(path.values())
            # Each link's own gate by its start date: story alone (guaranteed) or the scenes (reachable).
            for lid, L in links.items():
                g = L['gate']
                if not g or not L['starts']: continue
                for w, n in g.items():
                    if w != 'total' and count(av, w, d('3/5'), SCENES) < n: gate_fail.append((name, lid, w, n))
            # The Runners arrivals (R5 until 12/13) by story alone.
            if count(av, 'R', d('12/13'), SURE) < 5: gate_fail.append((name, 'arrivals R5 by 12/13'))
            # Mark R7 (from 11/18) from scenes before his rank 10 date.
            if count(av, 'R', d('1/18'), SCENES) < 7: gate_fail.append((name, 'mark R7'))
            # Wren: 18 for rank 8 (after 11/24) by the solstice; 24 for rank 10 (after 3/2).
            if tot(d('12/20'), SCENES) < 18: gate_fail.append((name, 'wren 18'))
            if tot(d('3/2'), SCENES) < 24: gate_fail.append((name, 'wren 24'))
            for w in 'RSH':
                if count(av, w, d('12/20'), SCENES) < 6: gate_fail.append((name, w + '6 by the solstice'))
                if count(av, w, d('3/5'), SCENES) < 9: gate_fail.append((name, w + '9 by graduation'))
                if count(av, w, d('3/5'), ALL) < 10: gate_fail.append((name, w + ': not every card findable'))
            for nid, card in info['nodes']:
                if not av.get(card): gate_fail.append((name, 'node ' + nid))
            # The same year before this batch: no late strangers card, no released drops.
            old = availability(path, koi=False)
            for w in 'RSH':
                if count(old, w, d('3/5'), SCENES) < 9: before.append((name, w + '9'))
            for nid, card in info['nodes']:
                if not old.get(card) or old[card][0] == 'drop': before.append((name, 'node ' + nid))
        ok(len(info['nodes']) >= 9, f"Haenim's memory nodes found ({len(info['nodes'])})")
        ok(not gate_fail, f'every fragment gate is reachable on every path (fails: {gate_fail})')
        ok(before, f'before this batch some paths were short (now fixed): {sorted(set(before))}')
        sure = availability({'a4-crossroad-1': 'H', 'a5-jungwon-awakens': 'H', 'a5-crossroad-3': 'R'})
        print('  lowest path, guaranteed by 3/5:', {w: count(sure, w, d('3/5'), SURE) for w in 'RSH'},
              'with scenes:', {w: count(sure, w, d('3/5'), SCENES) for w in 'RSH'})
        ng = p.eval(r"""(()=>{const G=FemcGame;G.newGame();G.S.fragments=['runners-campus'];G.S.events=['a4-crossroad-1'];G.S.day=G.dayOf('11/1');
          G.newGamePlus();return {day:G.S.day,frags:G.S.fragments.length,events:G.S.events.length,drops:G.dropsOk()}})()""")
        ok(ng['frags'] == 0 and ng['events'] == 0 and ng['drops'] == [], f'New Game+ is a fresh year for fragments (so the same paths): {ng}')

    if want('release'):
        r = p.eval(r"""(()=>{const G=FemcGame,S=()=>G.S,out={};
          const at=(md,events,frags,ranks)=>{G.newGame();const s=G.S;s.phase='play';s.day=G.dayOf(md);s.events=events.slice();s.fragments=frags.slice();
            Object.entries(ranks||{}).forEach(([k,n])=>{s.links[k]={rank:n,xp:0,seen:[],rankDay:{},push:0,reversed:false}});return s};
          const before=id=>G.D.events.filter(e=>G.dayOf(e.date)<G.S.day).map(e=>e.id);
          const story=(md)=>{at(md,[],[]);const evs=before();const fr=[];const src=G.fragSources();
            Object.entries(src).forEach(([c,ss])=>{if(ss.some(x=>x.event&&evs.includes(x.event)&&!['a4-crossroad-1','a5-jungwon-awakens','a5-crossroad-3'].includes(x.event)))fr.push(c)});
            return {evs,fr}};
          at('4/20',[],[]);out.fresh=G.dropsOk();
          let s=story('10/25');at('10/25',s.evs,[...s.fr,'hoax-ladder']);out.x1=G.dropsOk();
          s=story('11/29');at('11/29',s.evs,[...s.fr,'hoax-ladder','strangers-low-tide']);out.x2=G.dropsOk();
          at('12/10',s.evs.concat(['a5-jungwon-awakens']),[...s.fr,'hoax-ladder','strangers-low-tide'],{jungwon:8});out.x2r8=G.dropsOk();
          s=story('12/13');at('12/13',s.evs,[...s.fr,'runners-trophy','strangers-low-tide','runners-rooftop']);out.x3=G.dropsOk();
          s=story('11/1');at('11/1',s.evs.filter(e=>e!=='a4-jihoon-awakens'),s.fr.filter(c=>c!=='hoax-ballot-box'));out.missed=G.dropsOk();
          at('10/20',s.evs.filter(e=>e!=='a4-jihoon-awakens'),s.fr.filter(c=>c!=='hoax-ballot-box'));out.missedEarly=G.dropsOk();
          s=story('3/1');const late=s.fr.filter(c=>!['runners-lake','strangers-koi','strangers-barley-tea'].includes(c));
          at('3/1',s.evs,late,{mark:10});out.lakeOne=G.dropsOk();
          at('3/1',s.evs,late,{mark:10,jaehyun:10,yunjin:10});out.lateAll=G.dropsOk();
          const h=G.makeHandoff('tartarus',{});out.req=h.request.dropsOk;out.reqMatch=JSON.stringify(h.request.dropsOk)===JSON.stringify(G.dropsOk());
          G.newGame();return out})()""")
        ok(r['fresh'] == [], f'a new game releases nothing ({r["fresh"]})')
        ok('runners-trophy' in r['x1'] and 'hoax-ladder' not in r['x1'] and not any(c in r['x1'] for c in ['strangers-low-tide', 'strangers-suture-kit']),
           f'after the first crossroad (pin followed) the trophy is released, nothing from later crossroads ({r["x1"]})')
        ok('hoax-math-homework' not in r['x2'] and 'runners-trophy' in r['x2'], f'math homework waits while Jungwon rank 8 can still give it ({r["x2"]})')
        ok('hoax-math-homework' in r['x2r8'], f'math homework is released once Jungwon rank 8 has played without it ({r["x2r8"]})')
        ok('strangers-suture-kit' in r['x3'] and 'runners-rooftop' not in r['x3'], f'after the third crossroad (bell) the suture kit is released ({r["x3"]})')
        ok('hoax-ballot-box' in r['missed'] and 'hoax-ballot-box' not in r['missedEarly'], f'a missed story event releases its card a week after its date ({r["missed"]} / {r["missedEarly"]})')
        ok('runners-lake' not in r['lakeOne'] and 'strangers-barley-tea' not in r['lakeOne'], f'No Service waits for both its ranks; a job card is never released ({r["lakeOne"]})')
        ok('runners-lake' in r['lateAll'] and 'strangers-koi' in r['lateAll'] and 'strangers-barley-tea' not in r['lateAll'], f'late link cards are released once their ranks are spent ({r["lateAll"]})')
        ok(r['reqMatch'], f'the handoff request carries dropsOk ({r["req"]})')

    if want('drop'):
        p.ctx = None
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html'})
        p.wait("document.readyState==='complete' && !!window.FemcBattle && !!window.FemcTartarus && !!FemcBattle.save", 40)
        time.sleep(0.5)
        def ev_room(drops, ho=True):
            return p.eval(r"""(async()=>{window.__got=null;window.__ttEvent=null;const B=FemcBattle,T=FemcTartarus;B.save.memories=[];
              const c=Object.assign({},B.tt(),{run:{},HO:%s,rand:()=>0,memoryFound:async m=>{window.__got=m.id}});
              T.rooms.event(c,FEMC_BATTLE_DATA.floors[0],{type:'event'});await new Promise(r=>setTimeout(r,250));return window.__got})()"""
                          % (json.dumps({'request': {'fragmentsOpen': True, 'fragments': [], 'dropsOk': drops}}) if ho else 'null'))
        got = ev_room(['strangers-suture-kit'])
        ok(got == 'strangers-suture-kit', f'a released card drops in a Tartarus event room ({got})')
        p.ws.call('Page.reload'); p.wait("document.readyState==='complete' && !!window.FemcBattle && !!FemcBattle.save", 40); time.sleep(0.4)
        got = ev_room([])
        ok(got is None, f'with nothing released no scene card drops ({got})')
        p.ws.call('Page.reload'); p.wait("document.readyState==='complete' && !!window.FemcBattle && !!FemcBattle.save", 40); time.sleep(0.4)
        got = ev_room([], ho=False)
        ok(got is None, f'practice (no handoff) never drops a scene card ({got})')

    errs = [e for e in p.console() if e[0] in ('exception', 'error')]
    ok(not errs, f'no browser errors ({errs[:3]})')
finally:
    p.close()
print(f'{len(checks)} checks passed')
for c in checks: print(' -', c[:220])
